const url = "https://magenta-mule-431488.hostingersite.com/assets/Wedding.jpg";
fetch(url, { 
  method: 'HEAD',
  headers: {
    'Referer': 'https://ais-dev-hqsjrrsmdqt7yk72y27ekd-101266346530.us-west2.run.app/'
  }
})
  .then(res => {
    console.log('With Referer - Status:', res.status);
  })
  .catch(err => console.error(err));

fetch(url, { 
  method: 'HEAD',
  headers: {
    'Referer': ''
  }
})
  .then(res => {
    console.log('Without Referer - Status:', res.status);
  })
  .catch(err => console.error(err));
