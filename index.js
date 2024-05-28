require("dotenv").config();
const { request } = require("express");

console.log("Hello kar");

const express = require("express"); //Creates an object from dependency express and storing in an object

const app = express();

const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello Kartikey");
});
app.get("/login", (req, res) => {
  res.send("<h1>Please login at chai and code</h1>");
});
app.get("/youtube", (req, res) => {
  res.send("<h2>This is youtube, chai and code</h2>");
});

app.get("/page2", (req, res) => {
  res.send("This is page 2");
});
app.get("/page3", (req, res) => {
  res.send("This is page 3");
});
app.listen(process.env.port, () => {
  console.log("This server is working on localhost 3000");
});
