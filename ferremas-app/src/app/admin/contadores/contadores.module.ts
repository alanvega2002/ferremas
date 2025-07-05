import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContadoresPageRoutingModule } from './contadores-routing.module';

import { ContadoresPage } from './contadores.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContadoresPageRoutingModule
  ],
  declarations: [ContadoresPage]
})
export class ContadoresPageModule {}
