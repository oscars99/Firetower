const url = "https://magenta-mule-431488.hostingersite.com/assets/wedding.jpg";
fetch(url, { method: 'HEAD' })
  .then(res => {
    console.log('Status:', res.status);
  })
  .catch(err => console.error(err));
