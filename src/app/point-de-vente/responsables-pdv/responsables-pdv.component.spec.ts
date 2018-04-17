import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponsablesPdvComponent } from './responsables-pdv.component';

describe('ResponsablesPdvComponent', () => {
  let component: ResponsablesPdvComponent;
  let fixture: ComponentFixture<ResponsablesPdvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResponsablesPdvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResponsablesPdvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
