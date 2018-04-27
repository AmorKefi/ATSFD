import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifAgentComponent } from './modif-agent.component';

describe('ModifAgentComponent', () => {
  let component: ModifAgentComponent;
  let fixture: ComponentFixture<ModifAgentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifAgentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifAgentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
