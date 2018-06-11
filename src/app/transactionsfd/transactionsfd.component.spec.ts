import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionsfdComponent } from './transactionsfd.component';

describe('TransactionsfdComponent', () => {
  let component: TransactionsfdComponent;
  let fixture: ComponentFixture<TransactionsfdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransactionsfdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionsfdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
