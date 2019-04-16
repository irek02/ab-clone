import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderContainerComponent } from './containers/header-container/header-container.component';
import { NavComponent } from './components/nav/nav.component';
import { FiltersComponent } from './components/filters/filters.component';
import { HttpClientModule } from '@angular/common/http';
import { ClickOutsideModule } from 'ng-click-outside';

@NgModule({
  declarations: [HeaderContainerComponent, NavComponent, FiltersComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    ClickOutsideModule
  ],
  exports: [HeaderContainerComponent]
})
export class CoreModule { }
