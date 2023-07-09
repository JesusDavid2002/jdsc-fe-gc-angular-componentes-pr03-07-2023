import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'jdsc-fe-gc-angular-componentes-pr03-07-2023';
  codigo: string = '';
  descripcion: string = '';
  precio: string = '';

  datosArticulos: any = []
  datoSeleccionado: any;

  agregarDatos(){
      let articuloNuevo = {
      'codigo': this.codigo,
      'descripcion': this.descripcion,
      'precio': this.precio,
      }
    this.datosArticulos.push(articuloNuevo);
    this.codigo= '';
    this.descripcion= '';
    this.precio= '';
  }

  modificarDatos(){
    let datoEnTabla = false; 

    for (let i = 0; i < this.datosArticulos.length; i++) {
      if (this.codigo === this.datosArticulos[i].codigo) {
        this.datosArticulos[i].descripcion = this.descripcion;
        this.datosArticulos[i].precio = this.precio;
        datoEnTabla = true; 
        break; 
      }
    }
  
    if (!datoEnTabla) {
      this.agregarDatos(); 
    }
  }

  recibirDatoSeleccionado(dato:any){
    this.datoSeleccionado = dato;
    this.codigo = this.datoSeleccionado.codigo;
    this.descripcion = this.datoSeleccionado.descripcion;
    this.precio = this.datoSeleccionado.precio;
  }
}
