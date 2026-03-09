const url = "https://magenta-mule-431488.hostingersite.com/assets/Wedding.jpg";
fetch(url, { method: 'HEAD' })
  .then(res => {
    console.log('Status:', res.status);
    console.log('Content-Type:', res.headers.get('content-type'));
  })
  .catch(err => console.error(err));
