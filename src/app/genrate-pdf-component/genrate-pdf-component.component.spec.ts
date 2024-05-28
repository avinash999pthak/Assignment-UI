import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenratePdfComponentComponent } from './genrate-pdf-component.component';

describe('GenratePdfComponentComponent', () => {
  let component: GenratePdfComponentComponent;
  let fixture: ComponentFixture<GenratePdfComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GenratePdfComponentComponent]
    });
    fixture = TestBed.createComponent(GenratePdfComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
