const axios = require("axios");
const { parse } = require("node-html-parser");
axios
  .get("https://ynet.co.il")
  .then(function (response) {
    // handle success
    const html = parse(response.data);
    console.log(html.querySelector("#slotTitle").text());
  })
  .catch((err) => console.log(err));
