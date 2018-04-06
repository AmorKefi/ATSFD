import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppFuctionComponent } from './app-fuction.component';

describe('AppFuctionComponent', () => {
  let component: AppFuctionComponent;
  let fixture: ComponentFixture<AppFuctionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppFuctionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppFuctionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
