import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpResponse,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS
} from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { delay, mergeMap, materialize, dematerialize } from 'rxjs/operators';

@Injectable()
export class FakeBackendInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return of(null)
      .pipe(
        mergeMap(() => {
          if (request.url.endsWith('/api/listings') && request.method === 'GET') {
            return of(new HttpResponse({ status: 200, body: this._generateListings() }));
          }

          return next.handle(request);
        })
      )
      .pipe(materialize())
      .pipe(delay(500))
      .pipe(dematerialize());
  }

  _generateListings() {
    const images = ['listing.jpg', 'listing2.jpeg', 'listing3.jpeg', 'listing4.jpeg'];
    const types = ['private room', 'entire apartment', 'tree house'];
    const locations = ['New York', 'San Francisco', 'Boston'];
    const titles = [
      'Brownstone Studio',
      'Charming gardenroom with woodstove',
      'Superb duplex apartment in the historical centre'
    ];
    const listings = [];

    for (let i = 0; i < 40; i++) {
      listings.push({
        image_url: 'assets/' + images[Math.floor(Math.random() * 4)],
        type: types[Math.floor(Math.random() * 3)],
        location: locations[Math.floor(Math.random() * 3)],
        title: titles[Math.floor(Math.random() * 3)],
        price: Math.floor(Math.random() * 1000),
        rating: {
          stars: Math.floor(Math.random() * 5),
          count: Math.floor(Math.random() * 1000)
        }
      });
    }

    return listings;
  }
}

export let fakeBackendProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: FakeBackendInterceptor,
  multi: true
};
