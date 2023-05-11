import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdicionarComponent } from './adicionar/adicionar.component';
import { PlanosComponent } from './planos/planos.component';
import { ContatoComponent } from './contato/contato.component';
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'adicionar', component: AdicionarComponent },
  { path: 'planos', component: PlanosComponent},
  { path: 'contato', component: ContatoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
