import { Component, OnInit } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { DataService } from 'src/app/data.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header-container',
  templateUrl: './header-container.component.html',
  styleUrls: ['./header-container.component.less']
})
export class HeaderContainerComponent implements OnInit {
  listings$: Observable<{}>;
  filterBarState$ = new BehaviorSubject({ homeType: { open: false, selected: false, filters: [] } });

  constructor(private dataService: DataService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.dataService.getCurrentFilters$().subscribe(filters => {
      const filterBarState = this.filterBarState$.getValue();
      filterBarState.homeType.filters = filters.homeType;
      this.filterBarState$.next(filterBarState);
    });
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

  markFilterSelected(filter: string) {
    const filters = this.filterBarState$.getValue();
    filters[filter].selected = true;
    this.filterBarState$.next(filters);
  }

  markFilterUnSelected(filter: string) {
    const filters = this.filterBarState$.getValue();
    filters[filter].selected = false;
    this.filterBarState$.next(filters);
  }

  applyFilters(filters) {

    this.closeFilterDropdown('homeType');

    this.router.navigate(['homes'], { queryParams: { 'home-type': filters.homeType } });

    this.dataService.loadListings(filters.homeType);

  }

}
