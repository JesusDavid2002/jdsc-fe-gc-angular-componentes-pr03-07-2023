import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-listado-articulos',
  templateUrl: './listado-articulos.component.html',
  styleUrls: ['./listado-articulos.component.css']
})
export class ListadoArticulosComponent {
  
  @Input() datosArticulos: any = [];
  @Output() seleccionarDato: EventEmitter<any> = new EventEmitter<any>();

  borrarArticulo(codigo:number){
    let index = this.datosArticulos.findIndex((articulo: { codigo: number; }) => articulo.codigo == codigo);  
    this.datosArticulos.splice(index, 1);
  }

  seleccionarArticulo(datos: any){
    this.seleccionarDato.emit(datos);
  }
}
