import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPdfComponentComponent } from './view-pdf-component.component';

describe('ViewPdfComponentComponent', () => {
  let component: ViewPdfComponentComponent;
  let fixture: ComponentFixture<ViewPdfComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewPdfComponentComponent]
    });
    fixture = TestBed.createComponent(ViewPdfComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
