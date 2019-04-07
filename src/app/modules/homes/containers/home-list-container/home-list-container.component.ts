import { Component, OnInit, Input } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { Filters } from 'src/app/containers/header-container/header-container.component';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home-list-container',
  templateUrl: './home-list-container.component.html',
  styleUrls: ['./home-list-container.component.less']
})
export class HomeListContainerComponent implements OnInit {

  listings$: Observable<{}>;

  constructor(private dataService: DataService) { }

  ngOnInit() {

    this.listings$ = this.dataService.getListings$();

    this.dataService.getCurrentFilters$().subscribe((filters: Filters) => {

      this.dataService.loadListings(filters);

    });

  }

}
