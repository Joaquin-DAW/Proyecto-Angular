import { Component } from '@angular/core';
import { Alumnado } from './alumnado';

@Component({
  selector: 'app-alumnado-daw',
  imports: [],
  templateUrl: './alumnado-daw.component.html',
  styleUrl: './alumnado-daw.component.css'
})
export class AlumnadoDAWComponent {
  alumnadoDAW: Alumnado[] = [
    new Alumnado('Juan', 'Pérez Rodrígues', '12345678A', '2000-01-01', 'Sevilla', 627256516, '2-DAW', ['Módulo 1', 'Módulo 2']),
    new Alumnado('Ana', 'García Díaz', '87654321B', '2001-02-02', 'Málaga', 123654789, '1-DAW', ['Módulo 1', 'Módulo 3']),
    new Alumnado('Alex', 'Torres Sagrado', '2345967C', '1996-12-27', 'Murcia', 23214214, '1-DAW', ['Módulo 1', 'Módulo 3', 'Módulo 4']),
    new Alumnado('Sandra', 'Algo Idea', '12345679D', '1986-10-22', 'Huelva', 68967884, '2-DAW', ['Módulo 1', 'Módulo 2', 'Módulo 4']),
  ];

  filtro: string ='todos';

  mostrarTodos() {
    this.filtro = 'todos';
  }

  mostrarPrimerAno() {
    this.filtro = '1-DAW';
  }

  mostrarSegundoAno() {
    this.filtro ='2-DAW';
  }
}
