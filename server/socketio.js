"use strict";
var io = require('socket.io');
var evento;
(function (evento) {
    var Evento = (function () {
        function Evento(server, ssl) {
            this.io = io(server);
            this.io.on("connection", function (socket) {
                console.log("Usuario conectado");
                socket.on("disconnect", function () {
                    console.log("Usuario desconectado");
                });
            });
        }
        Evento.prototype.publicarEvento = function (mensaje) {
            this.io.emit(mensaje.cuentaDestino, mensaje);
        };
        Evento.prototype.registrarCuentas = function (cuenta) {
            for (var _i = 0, cuenta_1 = cuenta; _i < cuenta_1.length; _i++) {
                var c = cuenta_1[_i];
            }
        };
        return Evento;
    }());
    evento.Evento = Evento;
})(evento = exports.evento || (exports.evento = {}));
