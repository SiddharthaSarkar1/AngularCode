import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyfromcompComponent } from './myfromcomp.component';

describe('MyfromcompComponent', () => {
  let component: MyfromcompComponent;
  let fixture: ComponentFixture<MyfromcompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyfromcompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyfromcompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
