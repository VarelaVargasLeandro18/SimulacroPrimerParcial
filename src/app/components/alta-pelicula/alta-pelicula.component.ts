import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireUploadTask, AngularFireStorage } from '@angular/fire/compat/storage';
import { PeliculaService } from 'src/app/services/pelicula.service';
import { Actor } from 'src/app/models/actor';
import { Pelicula } from 'src/app/models/pelicula';

@Component({
  selector: 'app-alta-pelicula',
  templateUrl: './alta-pelicula.component.html',
  styleUrls: ['./alta-pelicula.component.css']
})
export class AltaPeliculaComponent implements OnInit {

  public nombre: string = '';
  public tipo: string = '';
  public fechaDeEstreno: string = '';
  public cantidadDePublico: number = 0;
  public actorNombre: string = '';

  public basePath : string = '/assets';
  public imageUrl = '';
  public task?: AngularFireUploadTask;
  public progressValue?: Observable<number|undefined>;

  public success : string = '';
  public error : string = '';

  constructor(
    private service: PeliculaService, 
    private fireStorage: AngularFireStorage) 
  { }

  ngOnInit(): void {
  }

  async onSubirArchivo ( event : any ) {
    const file = event.target.files[0];
    if (file) {
      const filePath = `${this.basePath}/${file.name}`;
      this.task = this.fireStorage.upload(filePath, file);
      
      this.progressValue = this.task.percentageChanges();
      
      (await this.task).ref.getDownloadURL().then(url => { this.imageUrl = url; });
    } else {
      alert('No images selected');
      this.imageUrl = '';
    }
  }

  guardarPelicula() {
    this.error = '';
    this.success = '';
    if ( !this.nombre || !this.tipo || !this.fechaDeEstreno || 
         this.cantidadDePublico === 0 ||  
         !this.actorNombre || !this.imageUrl || !this.tipo ) {
      this.error = "FALTAN DATOS..."
      return
    }
    
    const pelicula = new Pelicula( this.nombre, this.tipo, this.fechaDeEstreno, this.cantidadDePublico, this.imageUrl );
    this.service.alta( pelicula )
      .then( () => this.success = "PELICULA CARGADA!" )
      .catch( () => this.error = "ERROR AL CARGAR LA PEL&iacute;LA" );
    
  }

  elegirActor( actor : Actor ) {
    this.actorNombre = actor.nombre + ' ' + actor.apellido;
  }

}
