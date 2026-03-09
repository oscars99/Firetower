const baseUrl = "https://magenta-mule-431488.hostingersite.com/assets/";
const logos = ["Logo.png", "logo.png", "Logo.jpg", "logo.jpg", "Logo.svg", "logo.svg", "Logo Transparent.png", "Logo%20Transparent.png"];

async function checkLogos() {
  for (const logo of logos) {
    const url = baseUrl + logo;
    try {
      const res = await fetch(url, { method: 'HEAD' });
      console.log(`${logo}: ${res.status}`);
    } catch (err) {
      console.log(`${logo}: Error`);
    }
  }
}

checkLogos();
