import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveformcompComponent } from './reactiveformcomp.component';

describe('ReactiveformcompComponent', () => {
  let component: ReactiveformcompComponent;
  let fixture: ComponentFixture<ReactiveformcompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactiveformcompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveformcompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
