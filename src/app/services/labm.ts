import { AngularFirestore } from "@angular/fire/compat/firestore";

export class LABM {
    
    constructor (
        private db : AngularFirestore,
        private collection : string
    ) {}

    alta ( document : any ) {
        return this.db.collection( this.collection ).add(document);
    }

    baja ( id : any ) {
        return this.db.collection( this.collection ).doc( id ).delete();
    } 

    modificacion ( id : any, document : any ) {
        return this.db.collection( this.collection ).doc( id ).update( document );
    }

    leer () {
        return this.db.collection( this.collection ).get();
    }

}