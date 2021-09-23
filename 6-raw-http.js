//because https is a paid-for feature on weatherstack, use http. https works in the same way.
//https is a core module of node, so doesn't need loading in separately.
const http = require("http");
const url =
  "http://api.weatherstack.com/current?access_key=b47ae6e976872c6c13ce18b07fb7564d&query=45,-75&units=m";

const request = http.request(url, (response) => {
  //use let because it is going to be updated.
  let data = "";

  //with http, you need to wait for chunks to appear and want to know when they have, so a listener needs to be included.
  response.on("data", (chunk) => {
    //chunk brings back a buffer and we need a string.
    data = data + chunk.toString();
  });

  //need to know when all chunks are in.
  response.on("end", () => {
    const body = JSON.parse(data);
    console.log(body);
  });
});

//Set up a listener for error handling
request.on("error", (error) => {
  console.log("An error", error);
});

// this tells it the request is set up and now needs to fire.
request.end();
