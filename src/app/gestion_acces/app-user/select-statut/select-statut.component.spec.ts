import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectStatutComponent } from './select-statut.component';

describe('SelectStatutComponent', () => {
  let component: SelectStatutComponent;
  let fixture: ComponentFixture<SelectStatutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectStatutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectStatutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
