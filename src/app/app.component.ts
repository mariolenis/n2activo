import { Component } from '@angular/core';
import { AppService, EResponse } from './app.service'

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'app.component.html',
    providers: [AppService]
})

export class AppComponent {   
    constructor(private appService: AppService) {
        this.appService.getCuentas().subscribe((res) => {
            if (res.status === EResponse.AUTH_OK)
                console.log('Componente: Usuario logueado');
            console.log(res.status)
            console.log(res.data)
        });
    } 
}