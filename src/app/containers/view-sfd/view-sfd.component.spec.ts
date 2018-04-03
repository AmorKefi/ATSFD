import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSfdComponent } from './view-sfd.component';

describe('ViewSfdComponent', () => {
  let component: ViewSfdComponent;
  let fixture: ComponentFixture<ViewSfdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewSfdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewSfdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
