import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Filters } from '../../containers/header-container/header-container.component';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FiltersComponent implements OnInit {

  @Input() filterBarState;
  @Output() closeFilterDropdown = new EventEmitter<any>();
  @Output() toggleFilterDropdown = new EventEmitter<any>();
  @Output() applyFilters = new EventEmitter<Filters>();

  constructor() { }

  ngOnInit() {
  }

}
