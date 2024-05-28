import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntegrationComponentComponent } from './integration-component.component';

describe('IntegrationComponentComponent', () => {
  let component: IntegrationComponentComponent;
  let fixture: ComponentFixture<IntegrationComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IntegrationComponentComponent]
    });
    fixture = TestBed.createComponent(IntegrationComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
