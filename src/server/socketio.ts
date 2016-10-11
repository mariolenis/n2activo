import * as http from 'http';
import * as https from 'https';
import * as io from 'socket.io';

export module evento {
    
    export interface IEvento {
        publicarEvento(mensaje: IMensaje): void;
        registrarCuentas(cuenta: string[]): void;
    }
    
    export interface IMensaje {
        cuentaDestino: string,
        link: string,
        mensaje: string
    }

    export class Evento implements IEvento {
        io: SocketIO.Server;

        /**
         * @param server http.Server | https.Server
         * @param ssl true si usa HTTPS
         */
        constructor(server: http.Server | https.Server, ssl: boolean) {
            this.io = io(server);

            this.io.on("connection", (socket: SocketIO.Socket) => {
                console.log("Usuario conectado");
                socket.on("disconnect", () => {
                    console.log("Usuario desconectado")
                });
            });
        }    

        publicarEvento(mensaje: IMensaje) {
            this.io.emit(mensaje.cuentaDestino, mensaje);
        }
        
        registrarCuentas(cuenta: string[]) {
            for (let c of cuenta){
                
            }
        }
    }

}