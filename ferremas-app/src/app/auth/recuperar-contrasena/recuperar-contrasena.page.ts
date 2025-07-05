import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-recuperar-contrasena',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonicModule            // ✅ Importa todo el módulo de Ionic
  ],
  templateUrl: './recuperar-contrasena.page.html',
  styleUrls: ['./recuperar-contrasena.page.scss']
})
export class RecuperarContrasenaPage {
  correo: string = '';
  mensaje: string = '';

  /**
   * Envía solicitud para recuperar la contraseña
   */
  recuperar(): void {
    if (!this.correo) {
      this.mensaje = '❗ Ingresa tu correo electrónico';
      return;
    }

    // Simulación de envío de recuperación
    this.mensaje = `📩 Se ha enviado un correo a ${this.correo}`;
  }
}
