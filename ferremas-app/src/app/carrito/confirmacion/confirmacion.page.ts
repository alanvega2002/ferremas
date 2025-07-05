import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-confirmacion',
  templateUrl: './confirmacion.page.html',
  styleUrls: ['./confirmacion.page.scss'],
  imports: [IonicModule, CommonModule, FormsModule],
  standalone: true,
})
export class ConfirmacionPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
