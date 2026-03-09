import { useState, useRef, useEffect } from 'react';
import { Mic, MicOff, Loader2 } from 'lucide-react';
import { GoogleGenAI, Modality, LiveServerMessage } from '@google/genai';
import { venueData } from '../data/venueData';

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export default function VoiceAgent() {
  const [isRecording, setIsRecording] = useState(false);
  const [isConnecting, setIsConnecting] = useState(false);
  const sessionRef = useRef<any>(null);
  const audioContextRef = useRef<AudioContext | null>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const processorRef = useRef<ScriptProcessorNode | null>(null);
  const nextPlayTimeRef = useRef<number>(0);
  const activeSourcesRef = useRef<AudioBufferSourceNode[]>([]);

  const startSession = async () => {
    setIsConnecting(true);
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      streamRef.current = stream;

      const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
      const audioCtx = new AudioContextClass({ sampleRate: 16000 });
      audioContextRef.current = audioCtx;
      nextPlayTimeRef.current = audioCtx.currentTime;

      const sessionPromise = ai.live.connect({
        model: "gemini-2.5-flash-native-audio-preview-09-2025",
        config: {
          responseModalities: [Modality.AUDIO],
          speechConfig: {
            voiceConfig: { prebuiltVoiceConfig: { voiceName: "Zephyr" } },
          },
          systemInstruction: `You are a helpful voice assistant for Fire Tower Miami, an event venue.
Use the following JSON data about the venue's amenities and rental agreement to answer user questions accurately.
Keep your answers concise and conversational, as they will be spoken aloud.
If the user asks something not covered in the data, politely inform them that they should contact the venue directly at BOOKINGS@FIRETOWERMIAMI.COM or (305) 593-6100 OPT #1.

Venue Data:
${JSON.stringify(venueData, null, 2)}`
        },
        callbacks: {
          onopen: () => {
            setIsConnecting(false);
            setIsRecording(true);

            const source = audioCtx.createMediaStreamSource(stream);
            const processor = audioCtx.createScriptProcessor(4096, 1, 1);
            processorRef.current = processor;

            source.connect(processor);
            processor.connect(audioCtx.destination);

            processor.onaudioprocess = (e) => {
              const inputData = e.inputBuffer.getChannelData(0);
              const pcm16 = new Int16Array(inputData.length);
              for (let i = 0; i < inputData.length; i++) {
                pcm16[i] = Math.max(-1, Math.min(1, inputData[i])) * 32767;
              }
              const base64 = btoa(String.fromCharCode(...new Uint8Array(pcm16.buffer)));
              sessionPromise.then(session => {
                session.sendRealtimeInput({
                  media: { data: base64, mimeType: 'audio/pcm;rate=16000' }
                });
              });
            };
          },
          onmessage: (message: LiveServerMessage) => {
            if (message.serverContent?.interrupted) {
              activeSourcesRef.current.forEach(source => {
                try { source.stop(); } catch (e) {}
              });
              activeSourcesRef.current = [];
              if (audioContextRef.current) {
                nextPlayTimeRef.current = audioContextRef.current.currentTime;
              }
            }

            const base64Audio = message.serverContent?.modelTurn?.parts?.[0]?.inlineData?.data;
            if (base64Audio && audioContextRef.current) {
              const binaryString = atob(base64Audio);
              const bytes = new Uint8Array(binaryString.length);
              for (let i = 0; i < binaryString.length; i++) {
                bytes[i] = binaryString.charCodeAt(i);
              }
              const pcm16 = new Int16Array(bytes.buffer);
              const float32 = new Float32Array(pcm16.length);
              for (let i = 0; i < pcm16.length; i++) {
                float32[i] = pcm16[i] / 32768;
              }

              const audioBuffer = audioContextRef.current.createBuffer(1, float32.length, 24000);
              audioBuffer.getChannelData(0).set(float32);

              const source = audioContextRef.current.createBufferSource();
              source.buffer = audioBuffer;
              source.connect(audioContextRef.current.destination);

              const currentTime = audioContextRef.current.currentTime;
              if (nextPlayTimeRef.current < currentTime) {
                nextPlayTimeRef.current = currentTime;
              }

              source.start(nextPlayTimeRef.current);
              nextPlayTimeRef.current += audioBuffer.duration;
              activeSourcesRef.current.push(source);

              source.onended = () => {
                activeSourcesRef.current = activeSourcesRef.current.filter(s => s !== source);
              };
            }
          },
          onclose: () => {
            stopSession();
          },
          onerror: (error) => {
            console.error("Live API Error:", error);
            stopSession();
          }
        }
      });

      sessionRef.current = await sessionPromise;

    } catch (error) {
      console.error("Error starting session:", error);
      setIsConnecting(false);
      stopSession();
    }
  };

  const stopSession = () => {
    setIsRecording(false);
    setIsConnecting(false);
    if (sessionRef.current) {
      try { sessionRef.current.close(); } catch (e) {}
      sessionRef.current = null;
    }
    if (processorRef.current) {
      processorRef.current.disconnect();
      processorRef.current = null;
    }
    if (streamRef.current) {
      streamRef.current.getTracks().forEach(track => track.stop());
      streamRef.current = null;
    }
    if (audioContextRef.current) {
      audioContextRef.current.close();
      audioContextRef.current = null;
    }
    activeSourcesRef.current = [];
  };

  const toggleRecording = () => {
    if (isRecording || isConnecting) {
      stopSession();
    } else {
      startSession();
    }
  };

  useEffect(() => {
    return () => stopSession();
  }, []);

  return (
    <div className="fixed bottom-6 left-6 z-50 flex flex-col items-start gap-2">
      {isRecording && (
        <div className="bg-white px-4 py-2 rounded-full shadow-md border border-gray-100 flex items-center gap-2 text-sm font-medium text-charcoal">
          <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
          Voice Agent Active
        </div>
      )}
      <div className="relative flex items-center justify-center">
        {isRecording && (
          <span className="absolute inset-0 rounded-full bg-red-500 animate-ping opacity-75"></span>
        )}
        <button
          onClick={toggleRecording}
          disabled={isConnecting}
          className={`relative w-14 h-14 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 z-10 ${
            isRecording
              ? 'bg-red-500 text-white hover:bg-red-600 hover:scale-105'
              : 'bg-gold text-charcoal hover:bg-gold-light hover:scale-105'
          } ${isConnecting ? 'opacity-70 cursor-not-allowed' : ''}`}
          aria-label={isRecording ? "Stop voice agent" : "Start voice agent"}
        >
          {isConnecting ? (
            <Loader2 className="w-6 h-6 animate-spin" />
          ) : isRecording ? (
            <MicOff className="w-6 h-6" />
          ) : (
            <Mic className="w-6 h-6" />
          )}
        </button>
      </div>
    </div>
  );
}
