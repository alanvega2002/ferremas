import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component'; // ✅ Importamos el layout

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: '',
    component: LayoutComponent, // ✅ Aquí aplicamos el layout con footer
    children: [
      {
        path: 'home',
        loadComponent: () => import('./pages/home/home.page').then(m => m.HomePage)
      },
      {
        path: 'productos',
        loadComponent: () => import('./pages/productos/productos.page').then(m => m.ProductosPage)
      },
      {
        path: 'detalle-producto/:id',
        loadComponent: () => import('./pages/detalle-producto/detalle-producto.page').then(m => m.DetalleProductoPage)
      },
      {
        path: 'carrito',
        loadComponent: () => import('./pages/carrito/carrito.page').then(m => m.CarritoPage)
      },
      {
        path: 'clientes',
        loadComponent: () => import('./pages/clientes/clientes.page').then(m => m.ClientesPage)
      },
      {
        path: 'detalle-pedido/:id',
        loadComponent: () => import('./pages/detalle-pedido/detalle-pedido.page').then(m => m.DetallePedidoPage)
      },
      {
        path: 'pedidos',
        loadComponent: () => import('./pages/pedidos/pedidos.page').then(m => m.PedidosPage)
      },
      {
        path: 'editar-perfil',
        loadComponent: () => import('./pages/editar-perfil/editar-perfil.page').then( m => m.EditarPerfilPage)
      },
      {
        path: 'pedidos', 
        loadComponent: () => import('./pages/pedidos/pedidos.page').then(m => m.PedidosPage) 
      }, // ✅ Nuevo
      

      
    ]
  },
  {
    path: 'login', // ❌ Login queda fuera del layout
    loadComponent: () => import('./pages/login/login.page').then(m => m.LoginPage)
  },
  {
    path: 'crear-cliente',// ❌ crear-clieete queda fuera del layout
    loadComponent: () => import('./pages/crear-cliente/crear-cliente.page').then(m => m.CrearClientePage)
  },
  {
    path: 'recuperar-contrasena',
    loadChildren: () => import('./auth/recuperar-contrasena/recuperar-contrasena.module').then( m => m.RecuperarContrasenaPageModule)
  },
  {
    path: 'cambiar-contrasena',
    loadChildren: () => import('./auth/cambiar-contrasena/cambiar-contrasena.module').then( m => m.CambiarContrasenaPageModule)
  },
  {
    path: 'usuarios',
    loadChildren: () => import('./admin/usuarios/usuarios.module').then( m => m.UsuariosPageModule)
  },
  {
    path: 'usuario-detalle',
    loadChildren: () => import('./admin/usuario-detalle/usuario-detalle.module').then( m => m.UsuarioDetallePageModule)
  },
  {
    path: 'vendedores',
    loadChildren: () => import('./admin/vendedores/vendedores.module').then( m => m.VendedoresPageModule)
  },
  {
    path: 'bodegueros',
    loadChildren: () => import('./admin/bodegueros/bodegueros.module').then( m => m.BodeguerosPageModule)
  },
  {
    path: 'contadores',
    loadChildren: () => import('./admin/contadores/contadores.module').then( m => m.ContadoresPageModule)
  },
  {
    path: 'listado',
    loadChildren: () => import('./categorias/listado/listado.module').then( m => m.ListadoPageModule)
  },
  {
    path: 'formulario',
    loadChildren: () => import('./categorias/formulario/formulario.module').then( m => m.FormularioPageModule)
  },
  {
    path: 'listado',
    loadChildren: () => import('./marcas/listado/listado.module').then( m => m.ListadoPageModule)
  },
  {
    path: 'confirmacion',
    loadChildren: () => import('./carrito/confirmacion/confirmacion.module').then( m => m.ConfirmacionPageModule)
  },
  {
    path: 'crear',
    loadChildren: () => import('./pedidos/crear/crear.module').then( m => m.CrearPageModule)
  },
  {
    path: 'inventario',
    loadChildren: () => import('./bodeguero/inventario/inventario.module').then( m => m.InventarioPageModule)
  },
  {
    path: 'pedidos',
    loadChildren: () => import('./bodeguero/pedidos/pedidos.module').then( m => m.PedidosPageModule)
  },
  {
    path: 'pedido-detalle',
    loadChildren: () => import('./bodeguero/pedido-detalle/pedido-detalle.module').then( m => m.PedidoDetallePageModule)
  },
  {
    path: 'actualizar-producto',
    loadChildren: () => import('./bodeguero/actualizar-producto/actualizar-producto.module').then( m => m.ActualizarProductoPageModule)
  },
  {
    path: 'pagos-pendientes',
    loadChildren: () => import('./contador/pagos-pendientes/pagos-pendientes.module').then( m => m.PagosPendientesPageModule)
  },
  {
    path: 'historial',
    loadChildren: () => import('./contador/historial/historial.module').then( m => m.HistorialPageModule)
  },
  {
    path: 'detalle-pago',
    loadChildren: () => import('./contador/detalle-pago/detalle-pago.module').then( m => m.DetallePagoPageModule)
  },
  {
    path: 'transferencia',
    loadChildren: () => import('./pagos/transferencia/transferencia.module').then( m => m.TransferenciaPageModule)
  },
  {
    path: 'confirmacion',
    loadChildren: () => import('./pagos/confirmacion/confirmacion.module').then( m => m.ConfirmacionPageModule)
  },
  {
    path: 'clientes',
    loadChildren: () => import('./vendedor/clientes/clientes.module').then( m => m.ClientesPageModule)
  },
  {
    path: 'pedidos',
    loadChildren: () => import('./vendedor/pedidos/pedidos.module').then( m => m.PedidosPageModule)
  },
  {
    path: 'pedido-detalle',
    loadChildren: () => import('./vendedor/pedido-detalle/pedido-detalle.module').then( m => m.PedidoDetallePageModule)
  },
  {
    path: 'crear-pedido-bodega',
    loadChildren: () => import('./vendedor/crear-pedido-bodega/crear-pedido-bodega.module').then( m => m.CrearPedidoBodegaPageModule)
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
