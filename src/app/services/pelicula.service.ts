import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
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
    this.db = new LABM( this.firestore, this.collection );
  }
  
}
