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
  @Output() closeFilterDropdown = new EventEmitter<string>();
  @Output() toggleFilterDropdown = new EventEmitter<string>();
  @Output() applyFilters = new EventEmitter<Filters>();

  constructor() { }

  ngOnInit() {
  }

}
