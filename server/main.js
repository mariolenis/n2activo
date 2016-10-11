"use strict";
var rutas_1 = require('./rutas');
var socketio_1 = require('./socketio');
var express = require('express');
var https = require('https');
var http = require('http');
var Server = (function () {
    function Server() {
        var app = new rutas_1.rutas.RutasActivo();
        this.http = http.createServer(app.getRouteManager());
        this.https = https.createServer({
            key: "",
            cert: ""
        }, app.getRouteManager());
        app.setEventoHandler(new socketio_1.evento.Evento(this.http, false));
        this.http.listen(3000);
        this.https.listen(443);
    }
    Server.prototype.redirect = function () {
        return express().get("*", function (req, res) {
            res.redirect("https://activo.la" + req.url);
        });
    };
    return Server;
}());
new Server();
