import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Escuela } from './escuela';

@Injectable({
  providedIn: 'root'
})
export class EscuelaService {
 //URL de todas las escuelas 
  private baseURL = "http://localhost:8080/api/v1/escuelas";

  constructor(private httpClient : HttpClient) { }


//Nos sirve para obtener las escuelas 
  obtenerListaDeEscuelas() : Observable<Escuela[]>{
    return this.httpClient.get<Escuela[]>( `${this.baseURL}`);
  }
  
}
