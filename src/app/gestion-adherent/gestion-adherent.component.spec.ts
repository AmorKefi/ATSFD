import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionAdherentComponent } from './gestion-adherent.component';

describe('GestionAdherentComponent', () => {
  let component: GestionAdherentComponent;
  let fixture: ComponentFixture<GestionAdherentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionAdherentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionAdherentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
