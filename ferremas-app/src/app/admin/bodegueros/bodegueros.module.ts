import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BodeguerosPageRoutingModule } from './bodegueros-routing.module';

import { BodeguerosPage } from './bodegueros.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BodeguerosPageRoutingModule
  ],
  declarations: [BodeguerosPage]
})
export class BodeguerosPageModule {}
