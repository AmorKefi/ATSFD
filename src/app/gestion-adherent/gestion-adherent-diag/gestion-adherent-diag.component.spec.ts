import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionAdherentDiagComponent } from './gestion-adherent-diag.component';

describe('GestionAdherentDiagComponent', () => {
  let component: GestionAdherentDiagComponent;
  let fixture: ComponentFixture<GestionAdherentDiagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionAdherentDiagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionAdherentDiagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
