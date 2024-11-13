const fs = require("fs");
const http = require("http");
const url = require("url");

/////////////////////// Server created successfully!! //////////////////////////

data = fs.readFileSync(`${__dirname}/dev-data/data.json`, "utf-8");
const Dataobj = JSON.parse(data);
const server = http.createServer((req, res) => {
  pathName = req.url;

  if (pathName === "/" || pathName === "/overview") {
    res.end("This is the OVERVIEW page.");
  } else if (pathName === "/product") {
    res.end("This is the PRODUCT page.");
  } else if (pathName === "/api") {
    res.end(data);
  } else {
    res.writeHead(404, {
      "Content-type": "text/html",
      "my-own-header": "hello-shonna",
    });
    res.end("<h1>Page not found!</h1>");
  }
});

server.listen(8000, "127.0.0.1", () => {
  console.log("listening to requests on port 8000");
});

////////////////////////////////////////////////////////////////////////////////
