import { Component, OnInit } from '@angular/core';
import { Actor } from 'src/app/models/actor';
import { Pais } from 'src/app/models/pais';
import { ActorService } from 'src/app/services/actor.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-actor-alta',
  templateUrl: './actor-alta.component.html',
  styleUrls: ['./actor-alta.component.css']
})
export class ActorAltaComponent implements OnInit {

  public nombre : string = '';
  public apellido : string = '';
  public pais : string = '';
  public success : string = '';
  public error : string = '';

  constructor(
    private service : ActorService,
    private toast : ToastrService
  ) { }

  ngOnInit(): void {
  }

  elegirPais ( pais : Pais ) {
    this.pais = pais.pais;
  }

  guardarActor () {
    this.success = '';
    this.error = '';

    if ( !this.nombre || !this.apellido || !this.pais ) {
      this.error = "FALTAN DATOS...";
      return
    }

    const actor = new Actor(
      this.nombre,
      this.apellido,
      this.pais
    );
    
    this.service.altaActor( actor )
      .then( () => this.success = "Se ha cargado el actor correctamente!" )
      .catch( () => this.error = "Error al cargar el actor." );
    
  }

}
