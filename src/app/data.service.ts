import { Injectable } from '@angular/core';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  listings$ = new BehaviorSubject([]);
  constructor() {}

  getListings$(): Observable<any[]> {
    return this.listings$.asObservable().pipe(delay(500));
  }

  loadListings() {
    this.listings$.next(this.generateListings());
  }

  private generateListings() {
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
