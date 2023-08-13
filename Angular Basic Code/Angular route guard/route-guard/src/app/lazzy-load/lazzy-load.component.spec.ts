import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LazzyLoadComponent } from './lazzy-load.component';

describe('LazzyLoadComponent', () => {
  let component: LazzyLoadComponent;
  let fixture: ComponentFixture<LazzyLoadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LazzyLoadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LazzyLoadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
