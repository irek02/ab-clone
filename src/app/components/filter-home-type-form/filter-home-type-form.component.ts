import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-filter-home-type-form',
  templateUrl: './filter-home-type-form.component.html',
  styleUrls: ['./filter-home-type-form.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FilterHomeTypeFormComponent implements OnInit {

  @Input() defaultFilters;
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
