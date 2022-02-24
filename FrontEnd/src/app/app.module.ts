import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http' 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { HomeComponent } from './components/home/home.component';
import { AddEmployerComponent } from './components/add-employer/add-employer.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { EditComponent } from './components/edit/edit.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddEmployerComponent,
    NavbarComponent,
    FooterComponent,
    EditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    Ng2SearchPipeModule

  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
