import { Injectable } from '@angular/core';
import { Aula } from 'src/aula';
import { AULAS } from './mock-aula';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class AulaService {

  getAulas(): Observable<Aula[]> {
    const aulas = of(AULAS);
    this.messageService.add('AulaService: fetched heroes');
    return aulas;
  }

  constructor(private messageService: MessageService) { }

  getAula(id: number): Observable<Aula> {
  
    const aula = AULAS.find(h => h.id === id)!;
    this.messageService.add(`AulaService: fetched aula id=${id}`);
    return of(aula);
  }

}


