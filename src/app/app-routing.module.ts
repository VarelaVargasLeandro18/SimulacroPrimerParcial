import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ActorAltaComponent } from './components/actor-alta/actor-alta.component';
import { ActorListadoComponent } from './components/actor-listado/actor-listado.component';
import { BusquedaComponent } from './components/busqueda/busqueda.component';
import { PeliculaAltaComponent } from './components/pelicula-alta/pelicula-alta.component';
import { PeliculaListadoComponent } from './components/pelicula-listado/pelicula-listado.component';

const routes: Routes = [
  {path: 'bienvenido', component: AppComponent },
  {path: 'busqueda', component: BusquedaComponent },
  {path: 'peliculas/alta', component: PeliculaAltaComponent},
  {path: 'actor/alta', component: ActorAltaComponent},
  {path: 'actor/listado', component: ActorListadoComponent},
  {path: 'peliculas/listado', component: PeliculaListadoComponent},
  {path: '', pathMatch:'full', redirectTo:'bienvenido' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }