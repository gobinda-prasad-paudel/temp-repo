//12 http module
const http = require("http");

//basic server
/* const server = http.createServer((req,res)  => {
  res.write("Welcome to our home page");
  res.end();


})
server.listen(5000); */


const server = http.createServer((req,res)  => {
  if (req.url === "/"){
    res.end("Welcome to our home page");
    return;
  }
 else if (req.url === "/about"){
    res.end("Here is our short history");
    return;
  }
  res.end(`<H1> Opps</H1>
    <p>Sorry the page you are looking for cannot be found</p>
    <a href="/" target="_blank">Back Home</a>`);
    


})

server.listen(5000);