import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormComopnentComponent } from './form-comopnent.component';

describe('FormComopnentComponent', () => {
  let component: FormComopnentComponent;
  let fixture: ComponentFixture<FormComopnentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormComopnentComponent]
    });
    fixture = TestBed.createComponent(FormComopnentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
