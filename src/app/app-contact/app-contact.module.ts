import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppContactRoutingModule } from './app-contact-routing.module';
import { ContactDefaultComponent } from './components/contact-default/contact-default.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';


@NgModule({
  declarations: [
    ContactDefaultComponent,
    ContactFormComponent
  ],
  imports: [
    CommonModule,
    AppContactRoutingModule
  ]
})
export class AppContactModule { }
