import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { DataState } from 'src/app/data.service';

@Component({
  selector: 'app-home-list',
  templateUrl: './home-list.component.html',
  styleUrls: ['./home-list.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeListComponent implements OnInit {

  @Input() homes: DataState;

  constructor() { }

  ngOnInit() {
  }

}
