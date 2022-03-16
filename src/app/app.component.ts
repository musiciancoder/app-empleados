import { Component } from '@angular/core';
import {Empleado} from './empleado.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'Listado de Empleados';
  empleados:Empleado[] = [
    new Empleado("Juan","Diaz","Presidente",7500),
    new Empleado("Ana","Matrin","Directora",4500),
    new Empleado("María","Fernandez","Jefa seccio",4500),
    new Empleado("Laura","Lopez","Secretaria",2500)
  ];

  //Lo queescribimos en el cuadro de texto se agrega al array
  agregarEmpleado(){ 
    let miEmpleado = new Empleado(this.cuadroNombre,this.cuadroApellido,this.cuadroCargo, this.cuadroSalario);
    this.empleados.push(miEmpleado);
  }

  cuadroNombre:string="";
  cuadroApellido:string="";
  cuadroCargo:string="";
  cuadroSalario:number=0;
}
