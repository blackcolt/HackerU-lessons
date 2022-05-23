const fs = require("fs-extra");
const http = require("http");
const moment = require("moment");
const { getClosetTime } = require("./bus-time");
const url = require("url");
const express = require("express");
const app = express();
const port = 3000;

/* app.get("/", (req, res) => {
  res.send("Hello world");
}); */

http
  .createServer((req, res) => {
    const queryObject = url.parse(req.url, true).query;
    console.log(getClosetTime(queryObject.kav, queryObject.time));
    res.write("hello world 2");
    res.end();
  })
  .listen(port);
console.log(`Example app listening at http://localhost:${port}`);
