const urls = [
  "https://magenta-mule-431488.hostingersite.com/logo.png",
  "https://magenta-mule-431488.hostingersite.com/Logo.png",
  "https://magenta-mule-431488.hostingersite.com/assets/logo-white.png",
  "https://magenta-mule-431488.hostingersite.com/assets/Logo-White.png"
];

async function check() {
  for (const url of urls) {
    const res = await fetch(url, { method: 'HEAD' });
    console.log(`${url}: ${res.status}`);
  }
}
check();
