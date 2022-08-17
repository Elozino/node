const Blog = require("../models/blog");

const blog_index = (req, res) => {
  Blog.find()
    .then((result) => {
      res.render("index", { title: "Home", blogs: result });
    })
    .catch((err) => {
      console.log(err);
    });
};
const blog_post = (req, res) => {
  const blog = new Blog({
    title: req.body.title,
    snippet: req.body.snippet,
    body: req.body.body,
  });

  blog
    .save()
    .then((result) => {
      res.redirect("/blogs");
    })
    .catch((err) => {
      console.log(err);
    });
};

const blog_create = (req, res) => {
  res.render("create", { title: "Create a new blog" });
};

const blog_id = (req, res) => {
  const id = req.params.id;
  Blog.findById(id)
    .then((result) => {
      res.render("blog", { title: "Blog", blog: result });
    })
    .catch((err) => {
      console.log(err);
    });
};

const blog_delete = (req, res) => {
  const id = req.params.id;
  Blog.findByIdAndDelete(id)
    .then((result) => {
      res.json({ redirect: "/blogs" });
    })
    .catch((err) => {
      console.log(err);
    });
};


module.exports = {
  blog_index,
  blog_post,
  blog_create,
  blog_id,
  blog_delete
};
