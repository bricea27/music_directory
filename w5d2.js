// Week 5 Day 2 Notes (12/16)

HTTP Vs WebSockets

Http - hypertext transfer protocol
  not a continuous connection - data is sent back and forth on request
  requests and responses
  when you click on a link, sends requests, you get a reponse, and the whole page refreshes

Ajax - Asynchronous Javascript and XML
  requests made to server without having to refresh the entire page (still within HTTP)
  think of gmail, when you open a new email it doesn't refresh whole window
  server can't pull data from the client - needs to be triggered on client side

var http = require("http");
//http is part of node - you do need to require it but not necessarily install it
