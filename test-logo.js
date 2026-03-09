const url = "https://rmavbdvkkabwpzavhdof.supabase.co/storage/v1/object/sign/web/Logo%20Transparent.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9mZDUyNmU4My04NmQzLTQzYTItODFlMS0zZTNhYWQyOWE5NWYiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ3ZWIvTG9nbyBUcmFuc3BhcmVudC5wbmciLCJpYXQiOjE3NzIxNjAwNjQsImV4cCI6MTg2Njc2ODA2NH0.eA1VhKGQpOHjE8GLmtDG4qr6l-bUdX3Eh__vqAzEveo";
fetch(url, { method: 'HEAD' })
  .then(res => {
    console.log('Status:', res.status);
  })
  .catch(err => console.error(err));
