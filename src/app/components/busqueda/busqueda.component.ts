import { Component, OnInit } from '@angular/core';
import { Pelicula } from 'src/app/models/pelicula';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {

  public pelicula? : Pelicula;
  public peliculas? : Pelicula[];

  constructor() { }

  ngOnInit(): void {
  }

  detalle ( pelicula : Pelicula ) {
    this.pelicula = pelicula;
  }

}
