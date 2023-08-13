import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutaiCompComponent } from './tutai-comp.component';

describe('TutaiCompComponent', () => {
  let component: TutaiCompComponent;
  let fixture: ComponentFixture<TutaiCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TutaiCompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TutaiCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
