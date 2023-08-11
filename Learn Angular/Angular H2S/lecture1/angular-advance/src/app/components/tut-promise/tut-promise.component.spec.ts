import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutPromiseComponent } from './tut-promise.component';

describe('TutPromiseComponent', () => {
  let component: TutPromiseComponent;
  let fixture: ComponentFixture<TutPromiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TutPromiseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TutPromiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
