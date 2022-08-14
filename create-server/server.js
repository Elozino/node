const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  // console.log("request made");
  // console.log(req.url, req.method);
  res.setHeader("Content-Type", "text/html");
  // Writing to the page
  // res.write("Hello, Folks");
  // res.write("<p>Hello Paragraph</p>");

  // // Send an html file
  // fs.readFile("./views/index.html", (err, data) => {
  //   if (err) {
  //     console.log(err);
  //     res.end()
  //   } else {
  //     res.write(data);
  //     res.end();
  //   }
  // });

  let path = "./views/";
  switch (req.url) {
    case "/":
      path += "index.html";
      res.statusCode = 200;
      break;
    case "/about":
      path += "about.html";
      res.statusCode = 200;
      break;
    case "/about-me":
      res.statusCode = 301;
      res.setHeader("Location", "/about.html")
      res.end()
      break;
    case "/about":
      path += "about.html";
      res.statusCode = 200;
      break;
    default:
      path += "404.html";
      res.statusCode = 404;
      break;
  }
  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err);
      res.end();
    } else {
      res.write(data);
      res.end();
    }
  });
});

server.listen("8000", "localhost", () => {
  console.log("listening on port 8000");
});
