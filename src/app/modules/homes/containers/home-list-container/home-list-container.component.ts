import { Component, OnInit, Input } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home-list-container',
  templateUrl: './home-list-container.component.html',
  styleUrls: ['./home-list-container.component.less']
})
export class HomeListContainerComponent implements OnInit {

  // @Input() listings: { loading: boolean, data: any[] };
  listings$: Observable<{}>;

  constructor(private dataService: DataService, private fb: FormBuilder) { }

  ngOnInit() {
    this.listings$ = this.dataService.getListings$();
    this.dataService.getCurrentFilters$().subscribe(filters => {
      this.dataService.loadListings(filters.homeType);
    });
    // this.dataService.loadListings([]);
  }

}
