import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppAboutRoutingModule } from './app-about-routing.module';
import { AboutDefaultComponent } from './components/about-default/about-default.component';
import { AboutSectionComponent } from './components/about-section/about-section.component';


@NgModule({
  declarations: [
    AboutDefaultComponent,
    AboutSectionComponent
  ],
  imports: [
    CommonModule,
    AppAboutRoutingModule
  ]
})
export class AppAboutModule { }
