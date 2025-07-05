import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { AuthService } from 'src/app/services/auth.service';
import {
  IonContent,
  IonList,
  IonItem,
  IonLabel,
  IonButton,
  IonSpinner, IonHeader, IonToolbar, IonTitle } from '@ionic/angular/standalone';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.page.html',
  styleUrls: ['./pedidos.page.scss'],
  standalone: true,
  imports: [IonTitle, IonToolbar, IonHeader, 
    CommonModule,
    RouterModule,
    IonContent,
    IonList,
    IonItem,
    IonLabel,
    IonButton,
    IonSpinner
  ]
})
export class PedidosPage implements OnInit {

  pedidos: any[] = [];
  cargando = true;

  constructor(
    private api: ApiService,
    private auth: AuthService
  ) {}

  ngOnInit(): void {
    const idUsuario = this.auth.obtenerIdUsuario();
    if (!idUsuario) return;

    this.api.getPedidosPorUsuario(idUsuario).subscribe({
      next: (res) => {
        this.pedidos = res;
        this.cargando = false;
      },
      error: () => {
        this.cargando = false;
        console.error('❌ Error al obtener pedidos');
      }
    });
  }
}
