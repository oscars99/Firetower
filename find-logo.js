const baseUrl = "https://magenta-mule-431488.hostingersite.com/assets/";
const paths = ["Logo.png", "logo.png", "Logo.jpg", "logo.jpg", "Logo.svg", "logo.svg"];

Promise.all(paths.map(path => {
  const url = baseUrl + path;
  return fetch(url, { method: 'HEAD' })
    .then(res => {
      if (res.status === 200) {
        console.log('Found:', url);
      }
    })
    .catch(() => {});
})).then(() => console.log('Done'));
