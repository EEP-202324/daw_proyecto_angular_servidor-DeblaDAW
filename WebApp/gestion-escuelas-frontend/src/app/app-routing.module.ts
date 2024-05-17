import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaEscuelasComponent } from './lista-escuelas/lista-escuelas.component';

const routes: Routes = [
  {path : 'escuelas', component:ListaEscuelasComponent},
  {path:'',redirectTo:'escuelas',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
