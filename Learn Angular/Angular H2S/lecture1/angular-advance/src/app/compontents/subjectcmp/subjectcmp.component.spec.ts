import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectcmpComponent } from './subjectcmp.component';

describe('SubjectcmpComponent', () => {
  let component: SubjectcmpComponent;
  let fixture: ComponentFixture<SubjectcmpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubjectcmpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectcmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
