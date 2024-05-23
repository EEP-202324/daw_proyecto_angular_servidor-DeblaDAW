import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AulaComponent } from './aula/aula.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AulaDetailComponent } from './aula-detail/aula-detail.component';


const routes: Routes = [
{ path: '', redirectTo: '/dashboard', pathMatch: 'full' },
{ path: 'dashboard', component: DashboardComponent },
 { path: 'aulas', component: AulaComponent},
 { path: 'detail/:id', component: AulaDetailComponent },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
