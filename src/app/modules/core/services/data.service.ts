import { Injectable } from '@angular/core';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { delay, switchMap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Filters } from '../containers/header-container/header-container.component';
import { Home } from '../../homes/containers/home-list-container/home-list-container.component';

export interface DataState<T> {
  loading: boolean;
  data: T;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private homes$ = new BehaviorSubject({ loading: true, data: [] });

  constructor(private httpClient: HttpClient, private route: ActivatedRoute) { }

  getHomes$(): Observable<DataState<Home[]>> {

    return this.homes$.asObservable();

  }

  loadHomes(filters: Filters) {

    this.homes$.next({ loading: true, data: [] });

    this.getHomesFromApi$(filters).subscribe((homes: Home[]) => {

      this.homes$.next({ loading: false, data: homes });

    });

  }

  getHomesFromApi$(filters: Filters): Observable<Home[]> {

    return this.httpClient.get<any[]>('assets/mocks/homes.json').pipe(
      // In a real API call, we would have passed filters to the backend
      // to give us a filtered list, but because our backend is a simple
      // JSON file, we filter the homes here.
      switchMap(homes => {

        if (filters.homeType.length) {
          return of(homes.filter(listing => filters.homeType.includes(listing.type)));
        }

        return of(homes);

      }),
      // Simulate network delay to see the spinner.
      delay(1000)
    );

  }

  getFiltersFromUrlQueryParams(): Observable<Filters> {

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
