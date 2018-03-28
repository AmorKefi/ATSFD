import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionUtilisateursLayoutComponent } from './gestion-utilisateurs-layout.component';

describe('GestionUtilisateursLayoutComponent', () => {
  let component: GestionUtilisateursLayoutComponent;
  let fixture: ComponentFixture<GestionUtilisateursLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionUtilisateursLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionUtilisateursLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
