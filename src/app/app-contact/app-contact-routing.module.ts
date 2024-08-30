import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactDefaultComponent } from './components/contact-default/contact-default.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';

const routes: Routes = [
  {
    path: '',
    component: ContactDefaultComponent,
    children: [
      {
        path: 'contact',
        component: ContactFormComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppContactRoutingModule { }
