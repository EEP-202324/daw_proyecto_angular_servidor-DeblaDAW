import { Component } from '@angular/core';
import { Escuela } from '../escuela';
import { EscuelaService } from '../escuela.service';

@Component({
  selector: 'app-lista-escuelas',
  templateUrl: './lista-escuelas.component.html',
  styleUrls: ['./lista-escuelas.component.css']
})
export class ListaEscuelasComponent {

  escuelas:Escuela[];

  constructor(private escuelaServicio : EscuelaService){ }

  ngOnInit(): void{
    this.obtenerEscuelas();
  }

  private obtenerEscuelas(){
    this.escuelaServicio.obtenerListaDeEscuelas().subscribe(dato => {
      this.escuelas = dato;
    });    
  }
}
