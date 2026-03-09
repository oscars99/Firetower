const url = "https://srv652-files.hstgr.io/ab64ddea1ff827ac/files/public_html/assets/Logo.png";
fetch(url)
  .then(res => {
    console.log('Status:', res.status);
    console.log('Content-Type:', res.headers.get('content-type'));
  })
  .catch(err => console.error(err));
