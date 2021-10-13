import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavComponent } from './shared/components/template/components/nav/nav.component';
import { HeaderComponent } from './shared/components/template/components/header/header.component';
import { FooterComponent } from './shared/components/template/components/footer/footer.component';
import { TopoComponent } from './shared/components/topo/topo.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardHeaderComponent } from './dashboard/dashboard-header/dashboard-header.component';
import { NoticiasHeaderComponent } from './noticias/noticias-header/noticias-header.component';
import { TemplateComponent } from './shared/components/template/template.component';



@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HeaderComponent,
    FooterComponent,
    TopoComponent,
    DashboardHeaderComponent,
    NoticiasHeaderComponent,
    TemplateComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
