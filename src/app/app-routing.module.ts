import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Interfaz1Component } from './interfaz1/interfaz1.component';
import { Interfaz2Component } from './interfaz2/interfaz2.component';

const routes: Routes = [
  { path: 'interfaz1', component: Interfaz1Component },
  { path: 'interfaz2', component: Interfaz2Component },
  { path: '', redirectTo: '/interfaz1', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
