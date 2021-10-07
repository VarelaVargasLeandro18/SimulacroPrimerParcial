import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Pelicula } from 'src/app/models/pelicula';

@Component({
  selector: 'app-tabla-pelicula',
  templateUrl: './tabla-pelicula.component.html',
  styleUrls: ['./tabla-pelicula.component.css']
})
export class TablaPeliculaComponent implements OnInit {

  @Input() public peliculas? : Pelicula[];
  @Output() public onEligePelicula : EventEmitter<Pelicula> = new EventEmitter<Pelicula>();
  
  constructor() { }

  ngOnInit(): void {
  }

  eligePelicula ( pelicula : Pelicula ) {
    this.onEligePelicula.emit( pelicula );
  }

}
