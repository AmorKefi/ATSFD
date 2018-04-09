import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompteFinancierDiagComponent } from './compte-financier-diag.component';

describe('CompteFinancierDiagComponent', () => {
  let component: CompteFinancierDiagComponent;
  let fixture: ComponentFixture<CompteFinancierDiagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompteFinancierDiagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompteFinancierDiagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
