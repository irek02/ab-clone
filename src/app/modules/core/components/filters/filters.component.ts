import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FilterBarState } from '../../containers/header-container/header-container.component';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.less']
})
export class FiltersComponent implements OnInit {

  @Input() filterBarState: FilterBarState;
  @Output() toggleFilterDropdown = new EventEmitter<string>();
  @Output() closeFilterDropdown = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

}
