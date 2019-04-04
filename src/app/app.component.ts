import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  title = 'airbnb-clone';

  listings$: Observable<any[]>;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.listings$ = this.dataService.getListings$();
  }

  parseStars(stars: number) {
    const result = [0, 0, 0, 0, 0];

    for (let i = 0; i <= stars; i++) {
      result[i] = 1;
    }

    return result;
  }
}
