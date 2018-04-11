import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PdvDiagComponent } from './pdv-diag.component';

describe('PdvDiagComponent', () => {
  let component: PdvDiagComponent;
  let fixture: ComponentFixture<PdvDiagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PdvDiagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PdvDiagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
