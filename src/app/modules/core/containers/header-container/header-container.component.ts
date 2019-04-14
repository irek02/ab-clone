import { Component, OnInit } from '@angular/core';

export type HomeTypes = 'Entire apartment' | 'Private room' | 'Tree house' | 'Hotel room';

@Component({
  selector: 'app-header-container',
  templateUrl: './header-container.component.html',
  styleUrls: ['./header-container.component.less']
})
export class HeaderContainerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
