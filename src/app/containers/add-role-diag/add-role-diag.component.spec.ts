import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRoleDiagComponent } from './add-role-diag.component';

describe('AddRoleDiagComponent', () => {
  let component: AddRoleDiagComponent;
  let fixture: ComponentFixture<AddRoleDiagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddRoleDiagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRoleDiagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
