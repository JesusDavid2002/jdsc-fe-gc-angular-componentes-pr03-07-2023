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

  // Recogemos los datos del vector y los metemos en el array
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

  // Recogeremos el array hasta llegar a la posición del objeto a modificar y utilizando los inputs actualizamos la descripcion y el precio
  // Si se cambia el codigo o el codigo no esta en la tabla se creara una instancia.
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

  // Recogemos el dato seleccionado al pulsar el boton Seleccionar y rellenamos los inputs con esos datos
  recibirDatoSeleccionado(dato:any){
    this.datoSeleccionado = dato;
    this.codigo = this.datoSeleccionado.codigo;
    this.descripcion = this.datoSeleccionado.descripcion;
    this.precio = this.datoSeleccionado.precio;
  }
}
