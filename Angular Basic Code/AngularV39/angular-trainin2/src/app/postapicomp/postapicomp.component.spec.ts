import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostapicompComponent } from './postapicomp.component';

describe('PostapicompComponent', () => {
  let component: PostapicompComponent;
  let fixture: ComponentFixture<PostapicompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostapicompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostapicompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
