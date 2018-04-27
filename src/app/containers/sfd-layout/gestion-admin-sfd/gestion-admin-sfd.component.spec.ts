import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionAdminSfdComponent } from './gestion-admin-sfd.component';

describe('GestionAdminSfdComponent', () => {
  let component: GestionAdminSfdComponent;
  let fixture: ComponentFixture<GestionAdminSfdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionAdminSfdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionAdminSfdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
