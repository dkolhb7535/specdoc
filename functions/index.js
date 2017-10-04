const functions = require('firebase-functions');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const session = require('express-session');
const fs = require('fs');
const ejs = require('ejs');
const firebase = require('firebase-admin');

firebase.initializeApp(functions.config().firebase);
require('./configure')(app);

app.get('/', (req, res) => {
  res.render('login',{
    title: "login"
  });
});

app.get('/home',(req,res) => {
  res.render('home', {
    title: " home"
  });
});

app.get('/writing', (req, res) => {
  res.render('writing', {
    title: 'writing',
    pageNum: req.query.pageNum
  });
});

app.get('/reading', (req, res) => {
  const body = req.body;


  res.render('reading', {
    title: body.title
  })
})

exports.app = functions.https.onRequest(app);
