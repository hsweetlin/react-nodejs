const http = require('node:http');
const fs = require('fs');
const url = require('url');
const nodemailer = require('nodemailer');
var mysql = require('mysql');
if (dotenv) dotenv.config();
var config = require('./config');


var transporter = nodemailer.createTransport({
  service : 'gmail',
  auth : {
    user: config.mail.mail_id,
    pass: config.mail.mail_password
  }
})

  var mailOptions = {
    from: config.mail.mail_id,
    to: 'xxx',
    subject: 'Sending email using nodemailer',
    text: 'Easy to use'
  }

  transporter.sendMail(mailOptions, function(error,info){
if(error){
  console.log(error)
} else{
  console.log('Email sent' + info.response)
}
  })


// var readStream = fs.createReadStream('./demo.html');

// // Write to the console when the file is opened:
// readStream.on('open', function () {
//   console.log('The file is open');
// });

var events = require('events');
// var eventEmitter = new events.EventEmitter();

// //Create an event handler:
// var myEventHandler = function () {
//   console.log('I hear a scream!');
// }

// //Assign the eventhandler to an event:
// eventEmitter.on('scream', myEventHandler);

// //Fire the 'scream' event:
// eventEmitter.emit('scream');

              
const server = http.createServer((req, res) => {
//   var q = url.parse(req.url, true);
//   var filename = "." + q.pathname;
//   res.statusCode = 200;

//   fs.readFile(filename, function(err, data) {
//     if (err) {
//       res.writeHead(404, {'Content-Type': 'text/html'});
//       return res.end("404 Not Found");
//     }
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('hello');
    return res.end();
  });
 
// });
    


server.listen(port, hostname, () => {
  console.log(`Server running at http://${config.host}:${config.port}/`);
});

