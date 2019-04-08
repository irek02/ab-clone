import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { DataState } from '../../../core/services/data.service';
import { Home } from '../../containers/home-list-container/home-list-container.component';

@Component({
  selector: 'app-home-list',
  templateUrl: './home-list.component.html',
  styleUrls: ['./home-list.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeListComponent implements OnInit {

  @Input() homes: DataState<Home[]>;

  constructor() { }

  ngOnInit() {
  }

}
