const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const Blog = require("./models/blog");

// Initializing Express
const app = express();

// Register view engine
app.set("view engine", "ejs");

// middleware
app.use(morgan("dev"));
app.use(express.static("public"));

// connect to mongodb
const dbURI =
  "mongodb+srv://Elozino:nodetest1@cluster0.yuqoj.mongodb.net/node-learning?retryWrites=true&w=majority";
mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(8000))
  .catch((err) => console.log(err));

// // Listening for request
// app.listen(8000);

app.get("/add-blog", (req, res) => {
  const blog = new Blog({
    title: "Test Blog 2",
    snippet: "This is a test blog",
    body: "This is the body of the test blog",
  });

  blog
    .save()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.get("/all-blogs", (req, res) => {
  Blog.find()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.get("/single-blog", (req, res) => {
  Blog.findById("62fc414d7ba1abc66353bae2")
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

// Routes
app.get("/", (req, res) => {
  res.render("index", { title: "Home" });
});

app.get("/about", (req, res) => {
  res.render("about", { title: "About" });
});

app.get("/blogs/create", (req, res) => {
  res.render("create", { title: "Create a new blog" });
});

//redirect
// app.get("/about-us", (req, res) => {
//   res.redirect("/about");
// });

//404 page
app.use((req, res) => {
  res.status(404).render("404", { title: "404" });
});
