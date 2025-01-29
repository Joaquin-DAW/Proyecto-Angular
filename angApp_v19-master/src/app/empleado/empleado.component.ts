import { Component } from '@angular/core';
import { Empleado } from './empleado';

@Component({
  selector: 'app-empleado',
  imports: [],
  templateUrl: './empleado.component.html',
  styleUrl: './empleado.component.css'
})

export class EmpleadoComponent {
  public title = "Bienvenido empleado modelo";
  public empleadoExt: Empleado;
  public trabajador:Empleado[];
  public trabajadorExterno: boolean;

  constructor(){
    this.empleadoExt = new Empleado("Selena", 41, "Generente", true);
    this.trabajador = [
      new Empleado('Juan', 30, 'Desarrollador', true),
      new Empleado("Pedro", 47, "Contable", true),
      new Empleado("Juana", 41, "Generente", true),
      new Empleado("Alex", 38, "Administrador", false)
    ]
    this.trabajadorExterno=true;
  }
  ng0nInit(){
    console.log(this.trabajador)
  }
}
