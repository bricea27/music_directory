// var http = require("http");
// var server = http.createServer(function(request, response){
//   response.end("<html><body><h1>Hello World!</h1><p>how are you?</p></body></html>"); // we can use html here because the browser reads it all as a string and interprets the tags
// });
// //method createServer takes an anonymous function with two parameters
//
// server.listen(2000);

// Exercise 1:
//
// Write an http server that, when started, requires two arguments. The server should send an h1 tag which has an inner text of the first argument and a p tag which has an inner text of the second argument.
//
// Remember that arguments on the command line will need quotes if they contain spaces.

// var h1 = process.argv[2];
// var p = process.argv[3];
//
// var http = require("http");
// var server = http.createServer(function(request, response){
//   response.end("<html><body><h1>" + h1 + "</h1><p>" + p + "</p></body></html>"); //use string concatenation to place variables inside of the string
// });
//
// server.listen(2000);

// Exercise 2:
//
// Write an http server that sends a link that points to its own page.

//
// var http = require("http");
// var server = http.createServer(function(requests, response){
//   response.end("<html><body><a href='http://localhost:2000'>Link</a></body></html>");
// });
//
// server.listen(2000);



// //Exercise 3:
//
// Write an http server that reponds with the number of requests it has received up to that point. For instance, the first reponse would be "1", then "2", then "3".

// var open = "<html><body>";
// var close = "</html></body>";
//
// var numReq = 0;
// var msg = "";
//
// var http = require("http");
// var server = http.createServer(function(request, response){
//
//   var path = request.url;
//   console.log(path);
//
//   if (path === "/") {
//     msg = "Hello World";
//   } else {
//     msg = "Phooey";
//   }
//
//   response.end(msg);
//
// });
//
// server.listen(2000);

// Exercise 4:

// Write an http server that, when receiving an url of "http://localhost:2000/foo", sends "bar" to the browser. Any other route should just send the empty string.

// var msg = "";
//
// var http = require("http");
// var server = http.createServer(function(request, response){
//
//   var path = request.url;
//
//   if (path === "/foo") {
//     msg = "bar";
//   } else {
//     msg = "";
//   }
//
//   response.end(msg);
//
// });
//
// server.listen(2000);

// Exercise 5:
//
// Write an http server that, when receiving an url of "http://localhost:2000/jaws" shows a picture of the Jaws movie poster. Link to an existing image on the internet to do so.

//
// var open = "<html><body>";
// var close = "</html></body>";
// var msg = "";
//
// var http = require("http");
// var server = http.createServer(function(request, response){
//
//   var path = request.url;
//
//   if (path === "/jaws") {
//     msg = open + "<img src = 'http://media-cache-ak0.pinimg.com/736x/62/05/1b/62051bf54afc8c1b73ec3a002973de59.jpg'>" + close;
//   } else {
//     msg = "";
//   }
//
//   response.end(msg);
//
//
// });
//
// server.listen(2000);

// Exercise 6:
//
// Write an http server that responds to the path /tortilla/rice with an h1 that has the text "MMMMM". The path /tortilla/guac should respond with an h1 that says "AHHHH". The path /tortilla/[ANYTHING] should respond with "Well, [ANYTHING] is good on a tortilla, too. Any other path should return an h1 that has the text "Missing something..."

var open = "<html><body>";
var close = "</html></body>";
var msg = "";

var http = require("http");
var server = http.createServer(function(request, response){

  var path = request.url;
  var parent = path.split("/")[1];
  var child = path.split("/")[2];

  if (parent != "tortilla") {
    msg = "<h1>Missing something...</h1>";
  } else if (child === "rice") {
    msg ="<h1>MMMMM</h1>";
  } else if (child === "guac") {
    msg = "<h1>AHHHH</h1>";
  } else if (child.trim() != "") {
    msg = "<h1>Well, " + child + " is good on a tortilla, too</h1>";
  }

  response.end(msg);

});

server.listen(2000);
