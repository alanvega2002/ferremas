import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  // ✅ Dirección base del backend API REST
  private baseUrl = 'https://localhost:7091/api';

  constructor(private http: HttpClient) {}

  // ============================
  // 📦 MÓDULO HOME
  // ============================

  /** ✅ Obtener los productos más recientes (home) */
  getProductosRecientes(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/productos`);
  }

  // ============================
  // 📦 MÓDULO PRODUCTOS
  // ============================

  /** ✅ Obtener todos los productos */
  getProductos(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/productos`);
  }

  /** ✅ Obtener un producto por ID */
  getProductoPorId(id: number | string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/productos/${id}`);
  }

  // ============================
  // 🛒 MÓDULO CARRITO
  // ============================

  /** ✅ Agregar un producto al carrito */
  agregarAlCarrito(item: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/carrito/agregar`, item);
  }

  /** ✅ Obtener carrito de un usuario */
  getCarritoPorUsuario(idUsuario: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/carrito/${idUsuario}`);
  }

  /** ✅ Actualizar cantidad de un producto en el carrito */
  actualizarCantidadCarrito(item: { idUsuario: number, idProducto: number, cantidad: number }): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/carrito/actualizar-cantidad`, item);
  }

  /** ✅ Eliminar un producto del carrito */
  eliminarDelCarrito(idUsuario: number, idProducto: number): Observable<any> {
    return this.http.request<any>('delete', `${this.baseUrl}/carrito/eliminar-item`, {
      body: { idUsuario, idProducto }
    });
  }

  /** ✅ Vaciar completamente el carrito */
  vaciarCarrito(idUsuario: number): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/carrito/vaciar/${idUsuario}`);
  }

  /** ✅ Sincronizar carrito con backend */
  sincronizarCarrito(data: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/carrito/sincronizar`, data);
  }

  // ============================
  // 🧾 MÓDULO PEDIDOS
  // ============================

  /** ✅ Confirmar pedido del usuario */
  confirmarPedido(idUsuario: number): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/pedido`, { idUsuario });
  }

  /** ✅ Obtener todos los pedidos del usuario */
  getPedidosPorUsuario(idUsuario: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/pedido/usuario/${idUsuario}`);
  }

  /** ✅ Obtener el detalle de un pedido */
  getDetallePedido(idPedido: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/pedido/${idPedido}`);
  }

  // ============================
  // 👤 MÓDULO CLIENTES
  // ============================

  /** ✅ Obtener todos los clientes */
  getClientes(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/clientes`);
  }

  /** ✅ Obtener cliente por ID */
  getClientePorId(id: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/clientes/${id}`);
  }

  crearCliente(cliente: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/auth/registro`, cliente);
  }


  /** ✅ Actualizar cliente existente */
  actualizarCliente(id: number, cliente: any): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/clientes/${id}`, cliente);
  }

  // ============================
  // 🔐 LOGIN
  // ============================

  /** ✅ Login con email y contraseña */
  login(credenciales: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/auth/login`, credenciales);
  }/**
 * ✅ Enviar solicitud de recuperación de contraseña
 * POST /api/Auth/recuperar-contrasena
 * @param correo El correo electrónico del usuario
 * @returns Observable con el resultado de la solicitud
 */
recuperarContrasena(correo: string): Observable<any> {
  const payload = { correo }; // se espera un JSON con el correo
  return this.http.post(`${this.baseUrl}/Auth/recuperar-contrasena`, payload);
}

}
