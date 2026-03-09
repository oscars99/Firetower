const url = "https://magenta-mule-431488.hostingersite.com/assets/Wedding.jpg";
fetch(url)
  .then(res => {
    console.log('Status:', res.status);
    console.log('Content-Type:', res.headers.get('content-type'));
    return res.text();
  })
  .then(text => console.log('Body start:', text.substring(0, 100)))
  .catch(err => console.error(err));
