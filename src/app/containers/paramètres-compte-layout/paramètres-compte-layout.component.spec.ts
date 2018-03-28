import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParamètresCompteLayoutComponent } from './paramètres-compte-layout.component';

describe('ParamètresCompteLayoutComponent', () => {
  let component: ParamètresCompteLayoutComponent;
  let fixture: ComponentFixture<ParamètresCompteLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParamètresCompteLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParamètresCompteLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
