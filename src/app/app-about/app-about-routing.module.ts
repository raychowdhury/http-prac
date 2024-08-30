import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutDefaultComponent } from './components/about-default/about-default.component';
import { AboutSectionComponent } from './components/about-section/about-section.component';

const routes: Routes = [
  {
    path: '',
    component: AboutDefaultComponent,
    children: [
      {
        path: 'about',
        component: AboutSectionComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppAboutRoutingModule { }
