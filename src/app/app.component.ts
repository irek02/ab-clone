import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  title = 'airbnb-clone';

  listings$: Observable<any[]>;

  constructor(private httpClient: HttpClient) {}

  ngOnInit() {
    this.listings$ = this.httpClient.get<any[]>('example.com/api/listings');
  }

  onScroll(event) {
    console.log('yay!', event);
  }

  parseStars(stars: number) {
    const result = [0, 0, 0, 0, 0];

    for (let i = 0; i <= stars; i++) {
      result[i] = 1;
    }

    return result;
  }
}
