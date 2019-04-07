import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterHomeTypeFormComponent } from './components/filter-home-type-form/filter-home-type-form.component';
import { FiltersComponent } from './components/filters/filters.component';
import { NavComponent } from './components/nav/nav.component';
import { HeaderContainerComponent } from './containers/header-container/header-container.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClickOutsideModule } from 'ng-click-outside';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [FilterHomeTypeFormComponent, FiltersComponent, NavComponent, HeaderContainerComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ClickOutsideModule,
    HttpClientModule
  ],
  exports: [HeaderContainerComponent]
})
export class CoreModule { }
