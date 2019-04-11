import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomesRoutingModule } from './homes-routing.module';
import { HomeListContainerComponent } from './containers/home-list-container/home-list-container.component';

@NgModule({
  declarations: [HomeListContainerComponent],
  imports: [
    CommonModule,
    HomesRoutingModule
  ]
})
export class HomesModule { }
