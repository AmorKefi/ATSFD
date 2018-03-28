import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSfdDialogComponent } from './add-sfd-dialog.component';

describe('AddSfdDialogComponent', () => {
  let component: AddSfdDialogComponent;
  let fixture: ComponentFixture<AddSfdDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSfdDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSfdDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
