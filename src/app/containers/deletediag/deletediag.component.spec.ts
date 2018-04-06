import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletediagComponent } from './deletediag.component';

describe('DeletediagComponent', () => {
  let component: DeletediagComponent;
  let fixture: ComponentFixture<DeletediagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeletediagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletediagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
