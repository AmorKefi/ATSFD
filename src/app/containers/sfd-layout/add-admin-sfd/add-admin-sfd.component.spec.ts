import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAdminSfdComponent } from './add-admin-sfd.component';

describe('AddAdminSfdComponent', () => {
  let component: AddAdminSfdComponent;
  let fixture: ComponentFixture<AddAdminSfdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddAdminSfdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAdminSfdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
