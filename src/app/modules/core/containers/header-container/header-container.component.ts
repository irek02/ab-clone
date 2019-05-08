import { Component, OnInit, OnDestroy } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { DataService } from '../../services/data.service';

export type HomeTypes = 'Entire apartment' | 'Private room' | 'Tree house' | 'Hotel room';

export interface Filters {
  homeType: Array<HomeTypes>;
}

export interface FilterBarState {
  homeType: { open: boolean; filters: Array<HomeTypes> };
}

@Component({
  selector: 'app-header-container',
  templateUrl: './header-container.component.html',
  styleUrls: ['./header-container.component.less']
})
export class HeaderContainerComponent implements OnInit, OnDestroy {

  filterBarState$ = new BehaviorSubject<FilterBarState>({ homeType: { open: false, filters: [] } });
  subscription: Subscription;

  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit() {

    this.subscription = this.dataService.getFiltersFromUrlQueryParams().subscribe((filters: Filters) => {

      const filterBarState = this.filterBarState$.getValue();
      filterBarState.homeType.filters = filters.homeType;

      this.filterBarState$.next(filterBarState);

    });

  }

  ngOnDestroy() {

    this.subscription.unsubscribe();

  }

  toggleFilterDropdown(filter: string) {

    const filters = this.filterBarState$.getValue();
    filters[filter].open = !filters[filter].open;

    this.filterBarState$.next(filters);

  }

  closeFilterDropdown(filter: string) {

    const filters = this.filterBarState$.getValue();
    filters[filter].open = false;

    this.filterBarState$.next(filters);

  }

  applyFilters(filters: Filters) {

    this.closeFilterDropdown('homeType');

    this.router.navigate(['homes'], { queryParams: { 'home-type': filters.homeType } });

  }

}
