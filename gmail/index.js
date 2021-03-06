
const express = require('express');
const app = express();
const path = require("path");
const Sequelize = require("sequelize");
const bodyParser = require('body-parser');
const fs = require('fs');
const readline = require('readline');
const { google } = require('googleapis');
var nodemailer = require('nodemailer');
var lisId = []
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
var router = express.Router();

router.post('/email', function (req, res) {
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'galeriadaw2019@gmail.com',
      pass: '0939080599'
    }
  });

  var mailOptions = {
    from: 'galeriadaw2019@gmail.com',
    to: 'adm7605282@gmail.com',
    subject: req.body.asunto,
    text: req.body.mensaje
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
  res.redirect('htttp://localhost:3000/contact');
});
/*
function getEmails() {
  // If modifying these scopes, delete token.json.
  const SCOPES = ['https://www.googleapis.com/auth/gmail.readonly'];
  // The file token.json stores the user's access and refresh tokens, and is
  // created automatically when the authorization flow completes for the first
  // time.
  const TOKEN_PATH = 'gmail/token.json';
  const EMAIL_PATH = 'gmail/email.csv';

  // Load client secrets from a local file.
  fs.readFile('gmail/credentials.json', (err, content) => {
    if (err) return console.log('Error loading client secret file:', err);
    // Authorize a client with credentials, then call the Gmail API.
    authorize(JSON.parse(content), listEmails);
  });

  /**
   * Create an OAuth2 client with the given credentials, and then execute the
   * given callback function.
   * @param {Object} credentials The authorization client credentials.
   * @param {function} callback The callback to call with the authorized client.
   
  function authorize(credentials, callback) {
    const { client_secret, client_id, redirect_uris } = credentials.installed;
    const oAuth2Client = new google.auth.OAuth2(
      client_id, client_secret, redirect_uris[0]);

    // Check if we have previously stored a token.
    fs.readFile(TOKEN_PATH, (err, token) => {
      if (err) return getNewToken(oAuth2Client, callback);
      oAuth2Client.setCredentials(JSON.parse(token));
      callback(oAuth2Client);
    });
  }

  /**
   * Get and store new token after prompting for user authorization, and then
   * execute the given callback with the authorized OAuth2 client.
   * @param {google.auth.OAuth2} oAuth2Client The OAuth2 client to get token for.
   * @param {getEventsCallback} callback The callback for the authorized client.
   
  function getNewToken(oAuth2Client, callback) {
    const authUrl = oAuth2Client.generateAuthUrl({
      access_type: 'offline',
      scope: SCOPES,
    });
    console.log('Authorize this app by visiting this url:', authUrl);
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
    rl.question('Enter the code from that page here: ', (code) => {
      rl.close();
      oAuth2Client.getToken(code, (err, token) => {
        if (err) return console.error('Error retrieving access token', err);
        oAuth2Client.setCredentials(token);
        // Store the token to disk for later program executions
        fs.writeFile(TOKEN_PATH, JSON.stringify(token), (err) => {
          if (err) return console.error(err);
          console.log('Token stored to', TOKEN_PATH);
        });
        callback(oAuth2Client);
      });
    });
  }

  /**
   * Lists the labels in the user's account.
   *
   * @param {google.auth.OAuth2} auth An authorized OAuth2 client.
   


  function listEmails(auth) {
    fs.writeFile(EMAIL_PATH, "#subject,messages\n", (err) => {
      if (err) return console.error(err);
    });
    const gmail = google.gmail({ version: 'v1', auth });
    gmail.users.messages.list({
      userId: 'me',
    }, (err, res) => {
      if (err) return console.log('The API returned an error: ' + err);
      messages = res.data.messages;

      if (messages.length) {
        console.log('ID:');
        messages.forEach((message) => {
          gmail.users.messages.get({
            'userId': 'me',
            'id': message.id
          }, (err, res) => {
            if (err) return console.log('The API returned an error: ' + err);
            result = res.data.snippet;
            asuntos = res.data.payload.headers;
            if (asuntos.length) {
              asuntos.forEach((topic) => {
                if (topic.name == "Subject") {
                  var aux = topic.value + ";" + result + "\n";
                  fs.appendFile(EMAIL_PATH, aux, (err) => {
                    if (err) return console.error(err);
                    console.log('Asunto Guardado en', EMAIL_PATH);
                  });
                }
              });

            }
          });

        });
      }
    });
  }
}*/

app.use('/gmail', router);
const host = '0.0.0.0';
const port = process.env.PORT || 3002;

app.listen(port, host, function () {
  console.log("Server started.......");
});

