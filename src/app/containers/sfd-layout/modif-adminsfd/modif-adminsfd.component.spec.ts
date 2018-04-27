import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifAdminsfdComponent } from './modif-adminsfd.component';

describe('ModifAdminsfdComponent', () => {
  let component: ModifAdminsfdComponent;
  let fixture: ComponentFixture<ModifAdminsfdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifAdminsfdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifAdminsfdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
