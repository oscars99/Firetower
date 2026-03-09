const baseUrl = "https://magenta-mule-431488.hostingersite.com/assets/";
const logos = ["logo-transparent.png", "logo_transparent.png", "Logo-Transparent.png", "Logo_Transparent.png", "logo-white.png", "logo_white.png", "Logo-White.png", "Logo_White.png"];

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
