import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { ListaProductoComponent } from './lista-producto/lista-producto.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListaCarritoComponent } from './lista-carrito/lista-carrito.component';
import { DetalleProductoComponent } from './detalle-producto/detalle-producto.component';
import { PortadaComponent } from './portada/portada.component';
import { ContactoComponent } from './contacto/contacto.component';
import { CheckoutComponent } from './checkout/checkout.component';

@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    ListaProductoComponent,
    ListaCarritoComponent,
    DetalleProductoComponent,
    PortadaComponent,
    ContactoComponent,
    CheckoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
