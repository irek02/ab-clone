import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderContainerComponent } from './containers/header-container/header-container.component';

@NgModule({
  declarations: [HeaderContainerComponent],
  imports: [
    CommonModule
  ],
  exports: [HeaderContainerComponent]
})
export class CoreModule { }
