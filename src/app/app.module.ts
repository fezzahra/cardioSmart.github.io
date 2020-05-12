import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FeatureSliderComponent } from './feature-slider/feature-slider.component';

import { FormsModule } from '@angular/forms';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { QuestionnaireComponent } from './questionnaire/questionnaire.component';
import { SymptomePageComponent } from './symptome-page/symptome-page.component';
import { AproposPageComponent } from './apropos-page/apropos-page.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FeatureSliderComponent,
    AcceuilComponent,
    QuestionnaireComponent,
    SymptomePageComponent,
    AproposPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
   
  
  ],
  providers: [],

  bootstrap: [AppComponent]
})
export class AppModule { }
