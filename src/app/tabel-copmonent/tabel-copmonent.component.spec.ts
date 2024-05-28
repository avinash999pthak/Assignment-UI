import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelCopmonentComponent } from './tabel-copmonent.component';

describe('TabelCopmonentComponent', () => {
  let component: TabelCopmonentComponent;
  let fixture: ComponentFixture<TabelCopmonentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TabelCopmonentComponent]
    });
    fixture = TestBed.createComponent(TabelCopmonentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
