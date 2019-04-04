import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FormBuilder, FormArray, FormControl, FormGroup } from '@angular/forms';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  title = 'airbnb-clone';
  homeTypeFilters = [
    { name: 'Entire place', description: 'Have the whole place to yourself', selected: false },
    { name: 'Private room', description: 'Your own room with shared common spaces', selected: false },
    { name: 'Shared room', description: 'Share a room as a common space', selected: false },
    { name: 'Hotel room', description: 'Private or shared room in a hotel', selected: false }
  ];
  listings$: Observable<any[]>;
  form: FormGroup;

  constructor(private dataService: DataService, private fb: FormBuilder) {}

  ngOnInit() {
    this.listings$ = this.dataService.getListings$();
    this.form = this.fb.group({
      homeTypeFilters: new FormArray(this.homeTypeFilters.map(filter => new FormControl(false)))
    });
  }

  parseStars(stars: number) {
    const result = [0, 0, 0, 0, 0];

    for (let i = 0; i <= stars; i++) {
      result[i] = 1;
    }

    return result;
  }

  submit(formValue) {
    // figure out how to:
    // - close the filter dropdown
    // - make the current filter highlighted
    // - show the loader
    // - re-fetch the listings with the filters applied
    // - show the new listings
    // const formValue = Object.assign({}, value, {
    //   skills: form.skills.map((selected, i) => {
    //     return {
    //       id: this.user.skills[i].id,
    //       selected
    //    }
    //   });
    // });
  }
}
