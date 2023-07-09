import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-listado-articulos',
  templateUrl: './listado-articulos.component.html',
  styleUrls: ['./listado-articulos.component.css']
})
export class ListadoArticulosComponent {
  
  // Recogemos el array de datos del componente padre
  @Input() datosArticulos: any = [];

  // Pasamos al componente padre el evento para cuando seleccionemos o eliminemos un elemento del array
  @Output() seleccionarDato: EventEmitter<any> = new EventEmitter<any>();

  // Con este método eliminariamos el elemento en la posicion donde se ubica el botón utilizando el codigo como referencia
  borrarArticulo(codigo:number){
    let index = this.datosArticulos.findIndex((articulo: { codigo: number; }) => articulo.codigo == codigo);  
    this.datosArticulos.splice(index, 1);
  }

  // Seleccionamos el dato y se lo pasamos al componente padre
  seleccionarArticulo(datos: any){
    this.seleccionarDato.emit(datos);
  }
}
