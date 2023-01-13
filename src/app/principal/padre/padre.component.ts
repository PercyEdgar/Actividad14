import { Component } from '@angular/core';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent {

nombre: string ="";
dni: string ="";
estadoCivil: string ="";
datos: any;

enviarDatos() {
this.datos = {
nombre: this.nombre,
dni: this.dni,
estadoCivil: this.estadoCivil
};
}
}
