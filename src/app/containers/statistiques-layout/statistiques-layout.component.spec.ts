import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatistiquesLayoutComponent } from './statistiques-layout.component';

describe('StatistiquesLayoutComponent', () => {
  let component: StatistiquesLayoutComponent;
  let fixture: ComponentFixture<StatistiquesLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatistiquesLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatistiquesLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
