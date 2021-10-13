import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardHeaderComponent } from './dashboard/dashboard-header/dashboard-header.component';
import { TemplateComponent } from './shared/components/template/template.component';

const router: Routes = [
  {
    path: "",
    redirectTo: 'noticias',
    pathMatch: 'full'
},
{path: 'noticias', component: TemplateComponent},
{path: 'dashboard', component: DashboardHeaderComponent}

]


@NgModule({
  imports: [
    RouterModule.forRoot(router),
    CommonModule
  ],
  exports: [RouterModule]
})


export class AppRoutingModule { }
