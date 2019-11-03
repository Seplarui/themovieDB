import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GenerosComponent } from './components/generos/generos.component';

const routes: Routes = [
  { path: 'generos', component: GenerosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
