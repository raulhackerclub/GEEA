var five = require("johnny-five");
var board = new five.Board();
var express = require('express');
var app = express();

var led;

board.on("ready", function() {
  var led = new five.Led(13);

  app.listen(3000, function () {
    console.log('Servidor web criado na porta 3000');
  });
});

function resposta(req, res) {
  var status = led.isOn() ? 'ligado' : 'desligado';
  var html_page = '';

  html_page += '<h1>O led está ' + status + '</h1>';
  html_page += '<a href="/ligar" style="display:inline-block;border: 1px solid #999;padding:15px 20px;margin: 2px 5px;background:green;color:#FFF;">Ligar</a>';
  html_page += '<a href="/desligar" style="display:inline-block;border: 1px solid #999;padding:15px 20px;margin: 2px 5px;background:red;color:#FFF;">Desligar</a>';

  res.send('html_page');
}


app.get('/', function (req, res) {
  resposta(req, res);
});


app.get('/ligar', function (req, res) {
  led.on();
  res.redirect('/');
});


app.get('/desligar', function (req, res) {
  led.off();
  res.redirect('/');
});
