import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnicaldocumentationComponent } from './technicaldocumentation.component';

describe('TechnicaldocumentationComponent', () => {
  let component: TechnicaldocumentationComponent;
  let fixture: ComponentFixture<TechnicaldocumentationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechnicaldocumentationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechnicaldocumentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
