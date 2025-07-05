import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import {
  IonContent,
  IonInput,
  IonButton,
  IonLabel
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-crear-cliente',
  templateUrl: './crear-cliente.page.html',
  styleUrls: ['./crear-cliente.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    IonContent,
    IonInput,
    IonButton,
    IonLabel
  ],
})
export class CrearClientePage {

  // 🧾 Datos del cliente (estructura esperada por el backend)
  cliente = {
    nombre: '',
    apellido: '',               // ✅ Campo nuevo
    email: '',                  // ✅ antes era 'correo'
    rut: '',
    telefono: '',
    password: '',               // ✅ antes era 'clave'
    confirmarPassword: ''      // ✅ Campo nuevo
  };

  // 🆔 Diccionario para mostrar nombres más legibles en errores
  nombresCampos: any = {
    nombre: 'Nombre',
    apellido: 'Apellido',
    email: 'Correo electrónico',
    rut: 'RUT',
    telefono: 'Teléfono',
    password: 'Contraseña',
    confirmarPassword: 'Confirmar contraseña'
  };

  mensajeError: string = ''; // ⚠️ Texto de error en pantalla

  constructor(
    private api: ApiService,
    private router: Router
  ) {}

  /**
   * ✅ Intenta registrar al cliente si los datos son válidos
   */
  registrarCliente() {
    if (!this.validarFormulario()) return;

    this.api.crearCliente(this.cliente).subscribe({
      next: () => {
        this.mensajeError = '';
        // 🔁 Limpiar campos tras registro
        this.cliente = {
          nombre: '',
          apellido: '',
          email: '',
          rut: '',
          telefono: '',
          password: '',
          confirmarPassword: ''
        };
        this.router.navigate(['/login']);
      },
      error: () => {
        this.mensajeError = '❌ Error al registrar cliente. Intenta más tarde.';
      }
    });
  }

  /**
   * 🔍 Verifica que todos los campos estén completos y válidos
   */
  validarFormulario(): boolean {
    const campos = Object.entries(this.cliente);
    for (const [key, valor] of campos) {
      if (!valor.trim()) {
        const nombreCampo = this.nombresCampos[key] || key;
        this.mensajeError = `⚠️ El campo "${nombreCampo}" es obligatorio`;
        return false;
      }
    }

    // ⚠️ Validar que las contraseñas coincidan
    if (this.cliente.password !== this.cliente.confirmarPassword) {
      this.mensajeError = '⚠️ Las contraseñas no coinciden';
      return false;
    }

    this.mensajeError = '';
    return true;
  }

  /**
   * 🧭 Redirige al home al hacer clic en el logo FERREMAS
   */
  irAlHome() {
    this.router.navigate(['/home']);
  }
}
