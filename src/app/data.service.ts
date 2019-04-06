import { Injectable } from '@angular/core';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { delay, switchMap, switchMapTo } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private listings$ = new BehaviorSubject({ loading: true, data: [] });

  constructor(private httpClient: HttpClient, private route: ActivatedRoute) { }

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
      // In a real API call, we would have passed filters to the backend
      // to give us a filtered list, but because our backend is a simple
      // JSON file, we do the filtering on the front-end manually.
      switchMap(listings => {

        if (filters.length) {
          return of(listings.filter(listing => filters.includes(listing.type)));
        }

        return of(listings);

      }),
      // Simulate network delay to see the spinner.
      delay(1000)
    );

  }

  getCurrentFilters$() {
    return this.route.queryParams.pipe(
      switchMap(params => {
        if (Array.isArray(params['home-type'])) {
          return of({
            homeType: params['home-type']
          });
        }

        if (typeof params['home-type'] === 'string') {
          return of({
            homeType: [params['home-type']]
          });
        }

        return of({
          homeType: []
        });
      })
    );
  }

}
