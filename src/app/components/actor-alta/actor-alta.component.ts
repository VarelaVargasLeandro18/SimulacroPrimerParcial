import { Component, OnInit } from '@angular/core';
import { Actor } from 'src/app/models/actor';
import { Pais } from 'src/app/models/pais';

@Component({
  selector: 'app-actor-alta',
  templateUrl: './actor-alta.component.html',
  styleUrls: ['./actor-alta.component.css']
})
export class ActorAltaComponent implements OnInit {

  public nombre : string = '';
  public apellido : string = '';
  public pais : string = '';

  constructor() { }

  ngOnInit(): void {
  }

  elegirPais ( pais : Pais ) {
    
  }

  guardarActor () {

  }

}
