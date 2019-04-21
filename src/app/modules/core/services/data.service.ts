import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { delay, switchMap } from 'rxjs/operators';
import { Home } from '../../homes/containers/home-list-container/home-list-container.component';
import { ActivatedRoute } from '@angular/router';
import { Filters } from '../containers/header-container/header-container.component';

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

    this.httpClient.get<any[]>('assets/mocks/homes.json').pipe(

      switchMap((homes: Home[]) => {

        if (filters.homeType.length) {
          return of(homes.filter(listing => filters.homeType.includes(listing.type)));
        }

        return of(homes);

      }),

      delay(1000)

    ).subscribe((homes: Home[]) => {

      this.homes$.next({ loading: false, data: homes });

    });

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
