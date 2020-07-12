import { Injectable } from '@angular/core';
import { productos } from './productos';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  productos=productos;
  items=[];

  url="http://localhost:80/services/";

  constructor(private http:HttpClient) { }


  adicionarCarrito(producto){
    let encontrado=false;
    this.items.forEach((elemento)=>{
      if(elemento.id==producto.id){
        encontrado=true;
        elemento.cantidad+=1;
      }
    });
    if(!encontrado)
      this.items.push(producto);

    
    localStorage.setItem("carrito",JSON.stringify(this.items));
  }

  limpiarCarrito(){
    this.items=[];
    return this.items;
  }

  listarCarrito(){

    this.items=JSON.parse(localStorage.getItem("carrito"));
    return this.items;
  }

  guardarDatos(datos){
    let dato=[this.items,datos];
    localStorage.clear();
    console.log(dato);
    return this.http.post(`${this.url}guardar.php`,JSON.stringify(dato));
  }
  
}
