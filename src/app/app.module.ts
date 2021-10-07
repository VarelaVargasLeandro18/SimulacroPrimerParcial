import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { environment } from '../environments/environment';
import { BusquedaComponent } from './components/busqueda/busqueda.component';
import { ActorAltaComponent } from './components/actor-alta/actor-alta.component';
import { ActorListadoComponent } from './components/actor-listado/actor-listado.component';
import { PeliculaListadoComponent } from './components/pelicula-listado/pelicula-listado.component';
import { BienvenidoComponent } from './components/bienvenido/bienvenido.component';
import { TablaPeliculaComponent } from './components/tabla-pelicula/tabla-pelicula.component';
import { DetallePeliculaComponent } from './components/detalle-pelicula/detalle-pelicula.component';
import { TablaPaisesComponent } from './components/tabla-paises/tabla-paises.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AltaPeliculaComponent } from './components/alta-pelicula/alta-pelicula.component';
import { TablaActorComponent } from './components/tabla-actor/tabla-actor.component';
import { ActorPeliculaComponent } from './components/actor-pelicula/actor-pelicula.component';
import { ActorDetalleComponent } from './components/actor-detalle/actor-detalle.component';
import { PaisDetalleComponent } from './components/pais-detalle/pais-detalle.component';

@NgModule({
  declarations: [
    AppComponent,
    BusquedaComponent,
    ActorAltaComponent,
    ActorListadoComponent,
    PeliculaListadoComponent,
    BienvenidoComponent,
    TablaPeliculaComponent,
    DetallePeliculaComponent,
    TablaPaisesComponent,
    AltaPeliculaComponent,
    TablaActorComponent,
    ActorPeliculaComponent,
    ActorDetalleComponent,
    PaisDetalleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    FormsModule,
    AngularFireAuthModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
