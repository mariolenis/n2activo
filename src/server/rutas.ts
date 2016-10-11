import * as bparser from 'body-parser';
import * as express from 'express';
import * as debug from 'morgan';
import * as path from 'path';

import { evento } from './socketio';

export module rutas {

    export interface IRuta {
        setEventoHandler(eventoManager: evento.IEvento): void;
        getRouteManager(): express.Application;
    }
    
    interface IRequest extends express.Request {
        params: IParams
    }
    
    interface IParams {
        idcuenta: string
    }

    export class RutasActivo implements IRuta {
        appServer: express.Application = express();
        eventoManager: evento.IEvento;
        
        constructor() {
            // Objeto express.
            this.appServer.use(debug('dev'));
            this.appServer.use(bparser.json());
            this.appServer.use(bparser.urlencoded({ extended: true}));
            this.appServer.use(express.static(path.join(__dirname, '../')));
            
            this.appServer.get('/:idcuenta/cuenta', (req: IRequest, res: express.Response) => {
                 console.log('Cuenta... ' + req.params.idcuenta);
                res.status(200).json({"nombre":"Mario Lenis"});
            });
            
            this.appServer.get('/:idcuenta', (req: IRequest, res: express.Response) => {
                console.log('Buscando cuenta... ' + req.params.idcuenta);
                res.sendFile(path.join(__dirname, '../index.html'));
            });
        }

        setEventoHandler(eventoManager: evento.IEvento ) {
            this.eventoManager = eventoManager;
        }
        
        getRouteManager(): express.Application {
            return this.appServer
        }
    }
}