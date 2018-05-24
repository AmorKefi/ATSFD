import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewpdvComponent } from './viewpdv.component';

describe('ViewpdvComponent', () => {
  let component: ViewpdvComponent;
  let fixture: ComponentFixture<ViewpdvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewpdvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewpdvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
