import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DownloadPdfComponentComponent } from './download-pdf-component.component';

describe('DownloadPdfComponentComponent', () => {
  let component: DownloadPdfComponentComponent;
  let fixture: ComponentFixture<DownloadPdfComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DownloadPdfComponentComponent]
    });
    fixture = TestBed.createComponent(DownloadPdfComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
