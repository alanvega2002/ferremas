import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VendedoresPage } from './vendedores.page';

const routes: Routes = [
  {
    path: '',
    component: VendedoresPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VendedoresPageRoutingModule {}
