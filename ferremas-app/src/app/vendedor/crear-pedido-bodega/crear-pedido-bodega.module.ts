import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrearPedidoBodegaPageRoutingModule } from './crear-pedido-bodega-routing.module';

import { CrearPedidoBodegaPage } from './crear-pedido-bodega.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrearPedidoBodegaPageRoutingModule
  ],
  declarations: [CrearPedidoBodegaPage]
})
export class CrearPedidoBodegaPageModule {}
