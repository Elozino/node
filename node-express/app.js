const express = require("express");

// Initializing Express
const app = express();

// Register view engine
app.set("view engine", "ejs");

// Listening for request
app.listen(8000);

// Routes
app.get("/", (req, res) => {
  res.render("index", {title: "Home"});
});

app.get("/about", (req, res) => {
  res.render("about", {title: "About"});
});

app.get("/blogs/create", (req, res) => {
  res.render("create", {title: "Create a new blog"});
});

//redirect
// app.get("/about-us", (req, res) => {
//   res.redirect("/about");
// });

//404 page
app.use((req, res) => {
  res.status(404).render("404", {title: "404"});
});
