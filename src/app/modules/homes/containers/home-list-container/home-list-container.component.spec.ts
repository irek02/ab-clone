import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeListContainerComponent } from './home-list-container.component';

describe('HomeListContainerComponent', () => {
  let component: HomeListContainerComponent;
  let fixture: ComponentFixture<HomeListContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeListContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeListContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
