import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService, DataState } from 'src/app/data.service';
import { Filters } from 'src/app/containers/header-container/header-container.component';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-home-list-container',
  templateUrl: './home-list-container.component.html',
  styleUrls: ['./home-list-container.component.less']
})
export class HomeListContainerComponent implements OnInit, OnDestroy {

  homes$: Observable<DataState>;
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
