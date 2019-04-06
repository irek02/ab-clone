import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-home-list',
  templateUrl: './home-list.component.html',
  styleUrls: ['./home-list.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeListComponent implements OnInit {

  @Input() listings: { loading: boolean, data: any[] };

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
