import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionFonctionsLayoutComponent } from './gestion-fonctions-layout.component';

describe('GestionFonctionsLayoutComponent', () => {
  let component: GestionFonctionsLayoutComponent;
  let fixture: ComponentFixture<GestionFonctionsLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionFonctionsLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionFonctionsLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
