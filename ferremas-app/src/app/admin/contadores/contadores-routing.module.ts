import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContadoresPage } from './contadores.page';

const routes: Routes = [
  {
    path: '',
    component: ContadoresPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContadoresPageRoutingModule {}
