const baseUrl = "https://srv652-files.hstgr.io/ab64ddea1ff827ac/files/public_html/assets/";
const logos = ["Logo.png", "logo.png", "Logo-Transparent.png", "logo-transparent.png", "Logo%20Transparent.png"];

async function check() {
  for (const logo of logos) {
    const url = baseUrl + logo;
    const res = await fetch(url, { method: 'HEAD' });
    console.log(`${url}: ${res.status}`);
  }
}
check();
