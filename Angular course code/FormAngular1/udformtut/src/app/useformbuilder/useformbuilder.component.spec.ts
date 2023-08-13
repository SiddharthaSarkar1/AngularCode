import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UseformbuilderComponent } from './useformbuilder.component';

describe('UseformbuilderComponent', () => {
  let component: UseformbuilderComponent;
  let fixture: ComponentFixture<UseformbuilderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UseformbuilderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UseformbuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
