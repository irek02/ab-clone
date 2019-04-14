import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { delay } from 'rxjs/operators';
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

  constructor(private httpClient: HttpClient) { }

  getHomes$(): Observable<DataState<Home[]>> {

    return this.homes$.asObservable();

  }

  loadHomes() {

    this.homes$.next({ loading: true, data: [] });

    this.httpClient.get<any[]>('assets/mocks/homes.json').pipe(

      delay(1000)

    ).subscribe((homes: Home[]) => {

      this.homes$.next({ loading: false, data: homes });

    });

  }

}
