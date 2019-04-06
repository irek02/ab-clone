import { Component, OnInit } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { FormGroup, FormBuilder, FormArray, FormControl } from '@angular/forms';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-header-container',
  templateUrl: './header-container.component.html',
  styleUrls: ['./header-container.component.less']
})
export class HeaderContainerComponent implements OnInit {
  homeTypeFilters = [
    { name: 'Entire apartment', description: 'Have the whole place to yourself', selected: false },
    { name: 'Private room', description: 'Your own room with shared common spaces', selected: false },
    { name: 'Tree house', description: 'Enjoy an entire tree house with your friends', selected: false },
    { name: 'Hotel room', description: 'Private or shared room in a hotel', selected: false }
  ];
  listings$: Observable<{}>;
  form: FormGroup;
  filterBarState$ = new BehaviorSubject({ homeType: { open: false, selected: false } });

  constructor(private dataService: DataService, private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
      homeTypeFilters: new FormArray(this.homeTypeFilters.map(filter => new FormControl(false)))
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

    if (formValue.homeTypeFilters && formValue.homeTypeFilters.includes(true)) {
      this.markFilterSelected('homeType');
    } else {
      this.markFilterUnSelected('homeType');
    }

    const filters = this.homeTypeFilters
      .filter((filter, index) => formValue.homeTypeFilters[index])
      .map((filter, index) => {
        return filter.name;
      });

    this.dataService.loadListings(filters);

  }

}
