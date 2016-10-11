import {Injectable} from '@angular/core';
import { Http } from '@angular/http';
import {Observable} from 'rxjs/Rx';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

export interface IUsuario {
    nombre: string
}

export interface IResponse {
    status: EResponse,
    data: string | IUsuario
}

export enum EResponse {
    AUTH_OK, AUTH_ERR
}

@Injectable()
export class AppService {
    constructor(private $http: Http){}    
    
    getCuentas(): Observable<IResponse> {
        return this.$http.get('/kerberus/cuenta')
            .map((res) => {
                return <IResponse> {
                    status: EResponse.AUTH_OK,
                    data: <IUsuario>res.json()
                };
            });
    }
}