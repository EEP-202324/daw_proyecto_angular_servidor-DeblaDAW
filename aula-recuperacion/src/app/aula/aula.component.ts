import { Component, OnInit } from '@angular/core';
import { Aula } from 'src/aula';

import { AulaService } from '../aula.service';



@Component({
  selector: 'app-aula',
  templateUrl: './aula.component.html',
  styleUrls: ['./aula.component.css']
})
export class AulaComponent implements OnInit {
  aulas: Aula[] = [];

 

constructor(private aulaService: AulaService) {}

  ngOnInit(): void {
    this.getAulas();
  }

 
  getAulas(): void {
    this.aulaService.getAulas()
        .subscribe(aulas => this.aulas = aulas);
  }

  };
