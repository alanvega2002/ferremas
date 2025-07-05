import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { ApiService } from 'src/app/services/api.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonInput, IonLabel, IonItem, IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-editar-perfil',
  templateUrl: './editar-perfil.page.html',
  styleUrls: ['./editar-perfil.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonInput, IonLabel, IonItem, IonButton]
})
export class EditarPerfilPage implements OnInit {
  cliente: any = {};               // 📦 Datos del cliente actual
  mensaje: string = '';            // 📨 Mensaje de confirmación o error

  constructor(private api: ApiService, private auth: AuthService) {}

  ngOnInit(): void {
    const id = this.auth.obtenerIdUsuario();
    if (id !== null) {
      this.api.getClientePorId(id).subscribe({
        next: (data) => this.cliente = data,
        error: (err) => {
          console.error('❌ Error al cargar cliente:', err);
          this.mensaje = 'Error al cargar datos del perfil.';
        }
      });
    }
  }

  /**
   * 💾 Guarda los cambios editados del perfil
   */
  guardarCambios(): void {
    const id = this.auth.obtenerIdUsuario();
    if (id !== null) {
      this.api.actualizarCliente(id, this.cliente).subscribe({
        next: () => this.mensaje = '✅ Cambios guardados correctamente.',
        error: (err) => {
          console.error('❌ Error al actualizar perfil:', err);
          this.mensaje = 'Ocurrió un error al guardar.';
        }
      });
    }
  }
}
