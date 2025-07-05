import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagosPendientesPage } from './pagos-pendientes.page';

const routes: Routes = [
  {
    path: '',
    component: PagosPendientesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagosPendientesPageRoutingModule {}
