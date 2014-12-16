//music server

//global variables
var open = "<html><body>";
var close = "</html></body>";
var msg = "";

var http = require("http");
var server = http.createServer(function(request, response){

  var path = request.url;
  var parent = path.split("/")[2];
  var child = path.split("/")[3];

  var artist1 = "<li><a href='http://localhost:2000/artists/stevemiller'> Steve Miller Band </a></li>";
  var artist2 = "<li><a href='http://localhost:2000/artists/eagles'> The Eagles </a></li>";
  var artist3 = "<li><a href='http://localhost:2000/artists/vanmorrison'> Van Morrison </a></li>";
  var home = "<a href='http://localhost:2000/artists'>Home</a>";


  if (path === "/artists") {
    msg = open + home + "<h1>Artists</h1><ul>" + artist1 + artist2 + artist3 + "</ul>" + close;
  }

  else if (path === "/artists" + "/" + parent) {

    if (parent === "stevemiller") {
      msg = open + home + "<h1>Albums:</h1><ul><li><a href='stevemiller/fly'>Fly Like an Eagle</a></li><li><a href='stevemiller/bookofdreams'>Book of Dreams</a></li></ul>" + close;
    }

    if (parent === "eagles") {
      msg = open + home + "<h1>Albums:</h1><ul><li><a href='eagles/hotelcalifornia'>Hotel California</a></li><li><a href='eagles/desperado'>Desperado</a></li></ul>"+ close;
    }

    if (parent === "vanmorrison") {
      msg = open + home + "<h1>Albums:</h1><ul><li><a href='vanmorrison/moondance'>Moondance</a></li><li><a href='vanmorrison/toolate'>It's Too Late to Stop Now</a></li></ul>"+ close;
    }

  }//end parent else if (artists)


  else if (path === "/artists" + "/" + parent + "/" + child) {

    if ((parent === "stevemiller") && (child === "fly")) {
      msg = open + home + "<h1> Fly Like an Eagle </h1><ul><li>Serenade</li><li>Take the Money and Run</li><li>Rock 'N Me</li></ul>" + close;
    }

    if ((parent === "stevemiller") && (child === "bookofdreams")) {
      msg = open + home + "<h1> Book of Dreams </h1><ul><li>Jungle Love</li><li>Jet Airliner</li><li>The Stake</li></ul>" + close;
    }

    if ((parent === "eagles") && (child === "hotelcalifornia")) {
      msg = open + home + "<h1> Hotel California </h1><ul><li>Hotel California</li><li>Victim of Love</li><li>Take it Easy</li></ul>" + close;
    }

    if ((parent === "eagles") && (child === "desperado")) {
      msg = open + home + "<h1> Desperado </h1><ul><li>Witchy Woman</li><li>Lyin' Eyes</li><li>Tequila Sunrise</li></ul>" + close;
    }

    if ((parent === "vanmorrison") && (child === "moondance")) {
      msg = open + home + "<h1> Moondance </h1><ul><li>And it Stoned Me</li><li>Into the Mystic</li><li>Caravan</li></ul>" + close;
    }

    if ((parent === "vanmorrison") && (child === "toolate")) {
      msg = open + home + "<h1> It's Too Late to Stop Now </h1><ul><li>Warm Love</li><li>Domino</li><li>Gloria</li></ul>" + close;
    }

  }//end parent and child else if (albums)


  response.end(msg);


});//end server

server.listen(2000);//call server on port 2000
