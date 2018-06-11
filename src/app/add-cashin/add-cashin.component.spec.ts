import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCashinComponent } from './add-cashin.component';

describe('AddCashinComponent', () => {
  let component: AddCashinComponent;
  let fixture: ComponentFixture<AddCashinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCashinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCashinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
