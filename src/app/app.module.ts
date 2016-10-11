import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpModule, JsonpModule } from '@angular/http';
import { AppComponent }   from './app.component';
import { CuentaComponent } from './cuenta/cuenta.component';
import { ActivoModule } from './activo/activo.module'

@NgModule({
    imports: [BrowserModule, HttpModule, JsonpModule, ActivoModule ],
    declarations:   [AppComponent, CuentaComponent ],
    bootstrap:      [AppComponent, CuentaComponent]
})
export class AppModule {
    
 }