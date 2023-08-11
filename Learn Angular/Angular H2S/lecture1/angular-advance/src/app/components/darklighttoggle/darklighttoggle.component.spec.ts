import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DarklighttoggleComponent } from './darklighttoggle.component';

describe('DarklighttoggleComponent', () => {
  let component: DarklighttoggleComponent;
  let fixture: ComponentFixture<DarklighttoggleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DarklighttoggleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DarklighttoggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
