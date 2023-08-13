import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MydropdowComponent } from './mydropdow.component';

describe('MydropdowComponent', () => {
  let component: MydropdowComponent;
  let fixture: ComponentFixture<MydropdowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MydropdowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MydropdowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
