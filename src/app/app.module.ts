import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { fakeBackendProvider } from './fake-backend.interceptor';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, InfiniteScrollModule, HttpClientModule, AppRoutingModule],
  providers: [fakeBackendProvider],
  bootstrap: [AppComponent]
})
export class AppModule {}
