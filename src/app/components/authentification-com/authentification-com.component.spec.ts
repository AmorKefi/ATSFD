import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthentificationComComponent } from './authentification-com.component';

describe('AuthentificationComComponent', () => {
  let component: AuthentificationComComponent;
  let fixture: ComponentFixture<AuthentificationComComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthentificationComComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthentificationComComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
