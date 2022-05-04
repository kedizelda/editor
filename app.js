// const { createServer } = require('http');
// const server = http.createServer((request, response) => {
//     res.StatusCode = 200;
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
//     res.end();
// });
//     response.writeHead(100, { 'Content-Type': 'application/json'});
//     response.write('<h1>Hello world!</h1>');
//     return response.end();

// app.use(function(req, res, next) {
//   res.setHeader('Access-Control-Allow-Origin', '*');
//   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
//   res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
//   res.setHeader('Access-Control-Allow-Credidentials', true);
//   next();
// });

// app.get('/test', function(req, res){
//   var file = __dirname + 'gothbabe.webm';
//   res.download(file); // Set disposition and send it.
// });

// server.listen(8080);

// import { createRequire } from 'module';
// const require = createRequire(import.meta.url);

// Include required libs
var express = require("express");
var app = express();
var bodyParser = require("body-parser")
var path = require("path");
var fs = require("fs");
var upload_file = require("./file_upload.js");
var upload_image = require("./image_upload.js");
var upload_video = require("./video_upload.js");

app.use(express.static(__dirname + "/gothbabe"));
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", function(req, res) {
res.sendFile(__dirname + "/index.html");
});


// File POST handler.
app.post("/file_upload", function (req, res) {
upload_file(req, function(err, data) {

if (err) {
return res.status(404).end(JSON.stringify(err));
}

res.send(data);
});
});

// Image POST handler.
app.post("/image_upload", function (req, res) {
upload_image(req, function(err, data) {

if (err) {
return res.status(404).end(JSON.stringify(err));
}

res.send(data);
});
});

// Video POST handler.
app.post("/video_upload", function (req, res) {
upload_video(req, function(err, data) {

if (err) {
return res.status(404).end(JSON.stringify(err));
}

res.send(data);
});
});

// Create folder for uploading files.
var filesDir = path.join(path.dirname(require.main.filename), "uploads");

if (!fs.existsSync(filesDir)){
fs.mkdirSync(filesDir);
}

// Init server.
app.listen(3000, function () {
console.log("Example app listening on port 3000!");
});

server.listen(port, hostname, () => {
    console.log('pogu')
})