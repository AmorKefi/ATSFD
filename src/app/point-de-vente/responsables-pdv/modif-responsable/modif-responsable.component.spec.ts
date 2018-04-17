import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifResponsableComponent } from './modif-responsable.component';

describe('ModifResponsableComponent', () => {
  let component: ModifResponsableComponent;
  let fixture: ComponentFixture<ModifResponsableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifResponsableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifResponsableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
