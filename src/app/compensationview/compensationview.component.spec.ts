import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompensationviewComponent } from './compensationview.component';

describe('CompensationviewComponent', () => {
  let component: CompensationviewComponent;
  let fixture: ComponentFixture<CompensationviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompensationviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompensationviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
