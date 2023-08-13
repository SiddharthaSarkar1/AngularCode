import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyapicardComponent } from './myapicard.component';

describe('MyapicardComponent', () => {
  let component: MyapicardComponent;
  let fixture: ComponentFixture<MyapicardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyapicardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyapicardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
