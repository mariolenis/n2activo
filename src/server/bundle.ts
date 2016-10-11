import { rutas } from './rutas';
import { evento } from './socketio';
import * as express from 'express';
import * as https from 'https';
import * as http from 'http';

class Server {
        
    http: http.Server;
    https: https.Server;
    
    constructor() {
        // Creación de la applicación
        let app = new rutas.RutasActivo();
                
        this.http = http.createServer(app.getRouteManager());
        this.https = https.createServer({
            key: "",
            cert: ""
        }, app.getRouteManager());
        
        // Cambiar a (https, true)        
        app.setEventoHandler(new evento.Evento(this.http, false));
        
        // Puertos
        this.http.listen(3000);
        this.https.listen(443);
    }
    
    redirect(): express.Application {
        return express().get("*", (req: express.Request, res: express.Response) => {
            res.redirect("https://activo.la" + req.url);
        })
    }
}

new Server()