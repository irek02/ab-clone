import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeListContainerComponent } from './containers/home-list-container/home-list-container.component';

const routes: Routes = [
  {
    path: '',
    component: HomeListContainerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomesRoutingModule { }
