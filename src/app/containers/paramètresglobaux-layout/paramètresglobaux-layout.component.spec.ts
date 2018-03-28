import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParamètresglobauxLayoutComponent } from './paramètresglobaux-layout.component';

describe('ParamètresglobauxLayoutComponent', () => {
  let component: ParamètresglobauxLayoutComponent;
  let fixture: ComponentFixture<ParamètresglobauxLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParamètresglobauxLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParamètresglobauxLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
