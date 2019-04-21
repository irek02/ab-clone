import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HomeTypes } from '../../containers/header-container/header-container.component';

@Component({
  selector: 'app-filter-home-type-form',
  templateUrl: './filter-home-type-form.component.html',
  styleUrls: ['./filter-home-type-form.component.less']
})
export class FilterHomeTypeFormComponent implements OnInit {

  @Input() defaultFilters: HomeTypes[];
  @Output() applyHomeTypeFilter = new EventEmitter<string[]>();

  form: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {

    this.form = this.fb.group({
      'Entire apartment': [this.defaultFilters.includes('Entire apartment')],
      'Private room': [this.defaultFilters.includes('Private room')],
      'Tree house': [this.defaultFilters.includes('Tree house')],
      'Hotel room': [this.defaultFilters.includes('Hotel room')]
    });

  }

  submit(formValue) {

    const homeTypes = Object.keys(formValue).filter(filter => formValue[filter]);

    this.applyHomeTypeFilter.next(homeTypes);

  }

}
