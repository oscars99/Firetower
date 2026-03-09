const url = "https://rmavbdvkkabwpzavhdof.supabase.co/storage/v1/object/public/web/88325812_2505357626371077_8600920336659120128_n.jpg";
fetch(url).then(r => r.text()).then(t => console.log(t));
