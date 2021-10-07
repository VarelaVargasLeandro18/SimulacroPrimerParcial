import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Pelicula } from '../models/pelicula';
import { LABM } from './labm';

@Injectable({
  providedIn: 'root'
})
export class PeliculaService {

  private db : LABM;
  private collection : string = "Peliculas";

  constructor(
    private firestore : AngularFirestore
  ) { 
    this.db = new LABM( this.firestore.collection<Pelicula>(this.collection) );
  }

  alta ( pelicula : Pelicula ) {
    return this.db.alta( pelicula )
  }
  
}
