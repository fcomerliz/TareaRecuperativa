import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListaProductoComponent} from './lista-producto/lista-producto.component';
import {ListaCarritoComponent} from './lista-carrito/lista-carrito.component';
import {DetalleProductoComponent} from './detalle-producto/detalle-producto.component';


const routes: Routes = [
  {path:'',component:ListaProductoComponent},
  {path:'carrito',component:ListaCarritoComponent},
  {path:'carrito/:productoID',component:DetalleProductoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
