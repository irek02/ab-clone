import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { DataState, DataService } from '../../../core/services/data.service';
import { Filters, HomeTypes } from '../../../core/containers/header-container/header-container.component';

export interface Home {
  type: HomeTypes;
  title: string;
  location: string;
  price: number;
  image_url: string;
  rating: {
    count: number;
    stars: number;
  };
}

@Component({
  selector: 'app-home-list-container',
  templateUrl: './home-list-container.component.html',
  styleUrls: ['./home-list-container.component.less']
})
export class HomeListContainerComponent implements OnInit, OnDestroy {

  homes$: Observable<DataState<Home[]>>;
  subscription: Subscription;

  constructor(private dataService: DataService) { }

  ngOnInit() {

    this.homes$ = this.dataService.getHomes$();

    this.subscription = this.dataService.getFiltersFromUrlQueryParams().subscribe((filters: Filters) => {

      this.dataService.loadHomes(filters);

    });

  }

  ngOnDestroy() {

    this.subscription.unsubscribe();

  }

}
