import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudRfComponent } from './crud-rf.component';

describe('CrudRfComponent', () => {
  let component: CrudRfComponent;
  let fixture: ComponentFixture<CrudRfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrudRfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudRfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
