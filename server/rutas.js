"use strict";
var bparser = require('body-parser');
var express = require('express');
var debug = require('morgan');
var path = require('path');
var rutas;
(function (rutas) {
    var RutasActivo = (function () {
        function RutasActivo() {
            this.appServer = express();
            this.appServer.use(debug('dev'));
            this.appServer.use(bparser.json());
            this.appServer.use(bparser.urlencoded({ extended: true }));
            this.appServer.use(express.static(path.join(__dirname, '../')));
            this.appServer.get('/:idcuenta/cuenta', function (req, res) {
                console.log('Cuenta... ' + req.params.idcuenta);
                res.status(200).json({ "nombre": "Mario Lenis" });
            });
            this.appServer.get('/:idcuenta', function (req, res) {
                console.log('Buscando cuenta... ' + req.params.idcuenta);
                res.sendFile(path.join(__dirname, '../index.html'));
            });
        }
        RutasActivo.prototype.setEventoHandler = function (eventoManager) {
            this.eventoManager = eventoManager;
        };
        RutasActivo.prototype.getRouteManager = function () {
            return this.appServer;
        };
        return RutasActivo;
    }());
    rutas.RutasActivo = RutasActivo;
})(rutas = exports.rutas || (exports.rutas = {}));
