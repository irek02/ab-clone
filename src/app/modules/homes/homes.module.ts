import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomesRoutingModule } from './homes-routing.module';
import { HomeListContainerComponent } from './containers/home-list-container/home-list-container.component';
import { HomeListComponent } from './components/home-list/home-list.component';

@NgModule({
  declarations: [HomeListContainerComponent, HomeListComponent],
  imports: [
    CommonModule,
    HomesRoutingModule
  ]
})
export class HomesModule { }
