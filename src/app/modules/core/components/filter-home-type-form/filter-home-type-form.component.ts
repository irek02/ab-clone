import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-filter-home-type-form',
  templateUrl: './filter-home-type-form.component.html',
  styleUrls: ['./filter-home-type-form.component.less']
})
export class FilterHomeTypeFormComponent implements OnInit {

  form: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {

    // Will add default values in future lessons.
    this.form = this.fb.group({
      'Entire apartment': [],
      'Private room': [],
      'Tree house': [],
      'Hotel room': []
    });

  }

  submit(formValue) {

    const homeTypes = Object.keys(formValue).filter(filter => formValue[filter]);

    // Will pass homeTypes to the container component to make the API call and refresh the list.
    console.log(homeTypes);
  }

}
