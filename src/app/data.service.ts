import { Injectable } from '@angular/core';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { delay, filter, map, switchMap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private listings$ = new BehaviorSubject({ loading: true, data: [] });

  constructor(private httpClient: HttpClient) { }

  getListings$(): Observable<{ loading: boolean; data: any[] }> {

    return this.listings$.asObservable();

  }

  loadListings(filters: any[]) {

    this.listings$.next({ loading: true, data: [] });

    this.getListingsFromApi$(filters).subscribe(listings => {

      this.listings$.next({ loading: false, data: listings });

    });

  }

  getListingsFromApi$(filters: any[]): Observable<any[]> {

    return this.httpClient.get<any[]>('assets/mocks/listings.json').pipe(
      switchMap(listings => {

        if (filters.length) {
          return of(listings.filter(listing => filters.includes(listing.type)));
        }

        return of(listings);

      }),
      delay(1000)
    );

  }

}
