import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttptutcompComponent } from './httptutcomp.component';

describe('HttptutcompComponent', () => {
  let component: HttptutcompComponent;
  let fixture: ComponentFixture<HttptutcompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HttptutcompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HttptutcompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
