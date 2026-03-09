const url = "https://magenta-mule-431488.hostingersite.com/assets/Wedding.jpg";
fetch(url, { method: 'HEAD' })
  .then(res => {
    console.log('Content-Length:', res.headers.get('content-length'));
  })
  .catch(err => console.error(err));
