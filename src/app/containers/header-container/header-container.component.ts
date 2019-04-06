import { Component, OnInit } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { FormGroup, FormBuilder, FormArray, FormControl } from '@angular/forms';
import { DataService } from 'src/app/data.service';
import { Router, RouterStateSnapshot, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header-container',
  templateUrl: './header-container.component.html',
  styleUrls: ['./header-container.component.less']
})
export class HeaderContainerComponent implements OnInit {
  listings$: Observable<{}>;
  form: FormGroup;
  filterBarState$ = new BehaviorSubject({ homeType: { open: false, selected: false, filters: [] } });

  constructor(private dataService: DataService, private fb: FormBuilder, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.form = this.fb.group({
      homeTypeFilters: this.fb.group({
        'Entire apartment': [''],
        'Private room': [''],
        'Tree house': [''],
        'Hotel room': ['']
      })
    });
    this.dataService.getCurrentFilters$().subscribe(filters => {
      const filterBarState = this.filterBarState$.getValue();
      filterBarState.homeType.filters = filters.homeType;
      Object.keys(this.form.get('homeTypeFilters').controls).forEach(filter => {
        this.form.get('homeTypeFilters').controls[filter].value = filters.homeType.includes(filter);
      });
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

  submit(formValue) {

    if (!formValue.homeTypeFilters) {
      return;
    }

    this.closeFilterDropdown('homeType');

    formValue.homeTypeFilters = Object.keys(formValue.homeTypeFilters).filter(filter => formValue.homeTypeFilters[filter]);

    this.router.navigate(['homes'], { queryParams: { 'home-type': formValue.homeTypeFilters } });

    this.dataService.loadListings(formValue.homeTypeFilters);

  }

}
