import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutObservableComponent } from './tut-observable.component';

describe('TutObservableComponent', () => {
  let component: TutObservableComponent;
  let fixture: ComponentFixture<TutObservableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TutObservableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TutObservableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
