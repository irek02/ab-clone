import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter-home-type-form',
  templateUrl: './filter-home-type-form.component.html',
  styleUrls: ['./filter-home-type-form.component.less']
})
export class FilterHomeTypeFormComponent implements OnInit {

  @Input() form;
  @Output() submit = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

}
