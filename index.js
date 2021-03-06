const path = require("path");
const expressEdge = require("express-edge");
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = new express();

const Post = require("./database/models/Post");

mongoose.connect("mongodb://localhost/node-js-blog");

app.use(express.static("public"));

app.use(expressEdge);

app.set("views", `${__dirname}/views`);

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", async (req, res) => {
  const posts = await Post.find({});
  console.log(posts);
  res.render("index", {
    posts
  });
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/contact", (req, res) => {
  res.render("contact");
});

app.get("/post", (req, res) => {
  res.render("post");
});

app.get("/posts/new", (req, res) => {
  res.render("create");
});

app.post("/posts/store", (req, res) => {
  Post.create(req.body, (error, post) => {
    res.redirect("/");
    console.log(req.body);
  });
});

app.listen(3000, () => {
  console.log("listening on 3000");
});
