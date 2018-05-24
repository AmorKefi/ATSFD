import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowfunctionroleComponent } from './showfunctionrole.component';

describe('ShowfunctionroleComponent', () => {
  let component: ShowfunctionroleComponent;
  let fixture: ComponentFixture<ShowfunctionroleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowfunctionroleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowfunctionroleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
