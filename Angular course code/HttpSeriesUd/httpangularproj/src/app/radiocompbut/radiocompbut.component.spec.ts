import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadiocompbutComponent } from './radiocompbut.component';

describe('RadiocompbutComponent', () => {
  let component: RadiocompbutComponent;
  let fixture: ComponentFixture<RadiocompbutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RadiocompbutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RadiocompbutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
