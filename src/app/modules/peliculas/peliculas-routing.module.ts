import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PeliculaAltaComponent } from './components/pelicula-alta/pelicula-alta.component';
import { PeliculaListadoComponent } from './components/pelicula-listado/pelicula-listado.component';
import { PeliculasComponent } from './peliculas.component';

const routes: Routes = [
  { path: 'listado', component: PeliculaListadoComponent },
  { path: 'alta', component: PeliculaAltaComponent },
  { path: '', pathMatch:'full', redirectTo: 'listado' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PeliculasRoutingModule { }
