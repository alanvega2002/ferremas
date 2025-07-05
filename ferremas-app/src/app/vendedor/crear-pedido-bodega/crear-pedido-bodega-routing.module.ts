import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrearPedidoBodegaPage } from './crear-pedido-bodega.page';

const routes: Routes = [
  {
    path: '',
    component: CrearPedidoBodegaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrearPedidoBodegaPageRoutingModule {}
