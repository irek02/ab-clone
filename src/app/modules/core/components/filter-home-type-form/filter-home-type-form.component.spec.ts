import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterHomeTypeFormComponent } from './filter-home-type-form.component';

describe('FilterHomeTypeFormComponent', () => {
  let component: FilterHomeTypeFormComponent;
  let fixture: ComponentFixture<FilterHomeTypeFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterHomeTypeFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterHomeTypeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
