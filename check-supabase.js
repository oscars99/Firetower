const urls = [
  "https://rmavbdvkkabwpzavhdof.supabase.co/storage/v1/object/public/web/Logo%20Transparent.png",
  "https://rmavbdvkkabwpzavhdof.supabase.co/storage/v1/object/public/web/Logo.png",
  "https://rmavbdvkkabwpzavhdof.supabase.co/storage/v1/object/public/web/logo.png"
];

async function checkUrls() {
  for (const url of urls) {
    try {
      const res = await fetch(url, { method: 'HEAD' });
      console.log(`${url}: ${res.status}`);
    } catch (err) {
      console.log(`${url}: Error`);
    }
  }
}

checkUrls();
