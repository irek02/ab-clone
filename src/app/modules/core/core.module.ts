import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderContainerComponent } from './containers/header-container/header-container.component';
import { NavComponent } from './components/nav/nav.component';
import { FiltersComponent } from './components/filters/filters.component';

@NgModule({
  declarations: [HeaderContainerComponent, NavComponent, FiltersComponent],
  imports: [
    CommonModule
  ],
  exports: [HeaderContainerComponent]
})
export class CoreModule { }
