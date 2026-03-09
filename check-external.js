const urls = [
  "https://firetowermiami.com/wp-content/uploads/2023/06/Logo-Transparent.png",
  "https://firetowermiami.com/wp-content/uploads/2023/05/Logo-Transparent.png",
  "https://firetowermiami.com/wp-content/uploads/2023/04/Logo-Transparent.png",
  "https://firetowermiami.com/logo.png",
  "https://www.firetowermiami.com/logo.png"
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
