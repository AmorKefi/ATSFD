import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SfdnewviewComponent } from './sfdnewview.component';

describe('SfdnewviewComponent', () => {
  let component: SfdnewviewComponent;
  let fixture: ComponentFixture<SfdnewviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SfdnewviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SfdnewviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
