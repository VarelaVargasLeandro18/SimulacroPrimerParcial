import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { map } from 'rxjs/operators';
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

  leer () {
    return this.db.leer().pipe( 
      map( snapshots => snapshots.docs.map( doc => new Actor( doc.data().nombre, doc.data().apellido, doc.data().pais ) ) )
    )
  }

}
