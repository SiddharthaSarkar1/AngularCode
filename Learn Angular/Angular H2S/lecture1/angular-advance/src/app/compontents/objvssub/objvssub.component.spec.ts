import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjvssubComponent } from './objvssub.component';

describe('ObjvssubComponent', () => {
  let component: ObjvssubComponent;
  let fixture: ComponentFixture<ObjvssubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObjvssubComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ObjvssubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
