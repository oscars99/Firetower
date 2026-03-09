const url = "https://magenta-mule-431488.hostingersite.com/assets/Logo%20Transparent.png";
fetch(url, { method: 'HEAD' })
  .then(res => console.log('Status:', res.status))
  .catch(err => console.error(err));
