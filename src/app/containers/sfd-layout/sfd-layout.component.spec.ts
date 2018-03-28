import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SfdLayoutComponent } from './sfd-layout.component';

describe('SfdLayoutComponent', () => {
  let component: SfdLayoutComponent;
  let fixture: ComponentFixture<SfdLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SfdLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SfdLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
