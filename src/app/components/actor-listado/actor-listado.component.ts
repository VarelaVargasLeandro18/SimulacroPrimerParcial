import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Actor } from 'src/app/models/actor';
import { ActorService } from 'src/app/services/actor.service';

@Component({
  selector: 'app-actor-listado',
  templateUrl: './actor-listado.component.html',
  styleUrls: ['./actor-listado.component.css']
})
export class ActorListadoComponent implements OnInit {
  @Output() public onSeleccionarActor : EventEmitter<Actor> = new EventEmitter<Actor>();
  public actores? : Actor[];

  constructor(
    private service : ActorService
  ) { 
    this.service.leer().subscribe( actores => this.actores = actores );
  }

  ngOnInit(): void {
  }

  onElegirActor( actor : Actor ) {
    this.onSeleccionarActor.emit(actor);
  }

}
