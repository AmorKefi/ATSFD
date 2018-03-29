import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UtilisateurDiagComponent } from './utilisateur-diag.component';

describe('UtilisateurDiagComponent', () => {
  let component: UtilisateurDiagComponent;
  let fixture: ComponentFixture<UtilisateurDiagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UtilisateurDiagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UtilisateurDiagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
