import { NgModule } from '@angular/core';

import {ListaComponent} from './lista.component';
import {TablaComponent} from './tabla.component';
import {ActivoComponent} from './activo.component';

@NgModule({
    declarations: [ListaComponent, TablaComponent, ActivoComponent],
    exports: [ListaComponent, TablaComponent, ActivoComponent]
})

export class ActivoModule {
    
}
