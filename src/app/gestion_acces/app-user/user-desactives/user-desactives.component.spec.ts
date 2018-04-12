import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDesactivesComponent } from './user-desactives.component';

describe('UserDesactivesComponent', () => {
  let component: UserDesactivesComponent;
  let fixture: ComponentFixture<UserDesactivesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserDesactivesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDesactivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
