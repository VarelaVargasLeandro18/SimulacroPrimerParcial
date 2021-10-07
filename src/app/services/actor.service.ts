import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Actor } from '../models/actor';
import { LABM } from './labm';

@Injectable({
  providedIn: 'root'
})
export class ActorService {
  
  private db : LABM;
  private collection : string = "Actores";

  constructor(
    private firestore : AngularFirestore
  ) { 
    this.db = new LABM( this.firestore.collection<Actor>( this.collection ) );
  }

  altaActor ( actor : Actor ) {
    return this.db.alta(actor);
  }

}
