import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet, Router } from '@angular/router';

// ✅ Importamos solo los componentes de Ionic que usamos en el template
import {
  IonButton,
  IonIcon,
  IonBadge,
  IonToolbar,
  IonFooter
} from '@ionic/angular/standalone';

import { ApiService } from 'src/app/services/api.service';     // 📡 Servicio que se comunica con el backend
import { AuthService } from 'src/app/services/auth.service';   // 🔐 Servicio de autenticación para manejar sesiones

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  standalone: true, // ✅ Componente autónomo
  imports: [
    CommonModule,               // 🔁 *ngIf, *ngFor
    RouterOutlet,               // 📍 Para renderizar las rutas hijas
    RouterLink,                 // 🔗 Para navegación con routerLink
    RouterLinkActive,           // ✨ Permite marcar enlaces activos (opcional)
    IonButton, IonIcon, IonBadge, // 🧩 Componentes Ionic usados en la navbar
    IonToolbar, IonFooter       // ✅ Si en algún momento se requiere barra inferior
  ]
})
export class LayoutComponent implements OnInit {

  carritoCantidad: number = 0;     // 🛒 Número total de productos en el carrito
  usuarioNombre: string = '';      // 👤 Nombre del usuario logueado (si aplica)

  constructor(
    private api: ApiService,       // 📡 Servicio que accede al backend
    private auth: AuthService,     // 🔐 Manejo de sesión del usuario
    private router: Router         // 🧭 Para redirecciones
  ) {}

  /**
   * 🔁 Al iniciar el componente, consultamos si el usuario está logueado
   */
  ngOnInit(): void {
    const idUsuario = this.auth.obtenerIdUsuario(); // 📥 ID actual desde el token/localStorage

    if (idUsuario !== null) {
      const usuario = this.auth.obtenerUsuario();   // 📦 Obtener usuario desde el servicio
      this.usuarioNombre = usuario?.nombre || 'Usuario'; // ✅ Nombre mostrado en vista

      // 📊 Consultar cuántos productos tiene este usuario en su carrito
      this.api.getCarritoPorUsuario(idUsuario).subscribe({
        next: (productos) => this.carritoCantidad = productos.length, // ✅ Asignamos la cantidad
        error: (err) => console.error('❌ Error al obtener carrito:', err) // 🐞 Error de carga
      });
    }
  }

  /**
   * 🔓 Cierra la sesión actual del usuario
   */
  logout(): void {
    this.auth.cerrarSesion();           // 💣 Borra token y usuario
    this.router.navigate(['/login']);  // 🔄 Redirige al login
  }
}
