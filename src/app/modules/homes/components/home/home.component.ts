import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { Home } from '../../containers/home-list-container/home-list-container.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {

  @Input() home: Home;

  constructor() { }

  ngOnInit() {
  }

  parseStars(stars: number) {
    const result = [0, 0, 0, 0, 0];

    for (let i = 0; i <= stars; i++) {
      result[i] = 1;
    }

    return result;
  }

}
