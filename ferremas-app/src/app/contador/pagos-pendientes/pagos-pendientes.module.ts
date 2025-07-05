import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PagosPendientesPageRoutingModule } from './pagos-pendientes-routing.module';

import { PagosPendientesPage } from './pagos-pendientes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PagosPendientesPageRoutingModule
  ],
  declarations: [PagosPendientesPage]
})
export class PagosPendientesPageModule {}
