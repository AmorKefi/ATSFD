import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionRolesLayoutComponent } from './gestion-roles-layout.component';

describe('GestionRolesLayoutComponent', () => {
  let component: GestionRolesLayoutComponent;
  let fixture: ComponentFixture<GestionRolesLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionRolesLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionRolesLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
