import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestQuestionsRetrieveComponent } from './test-questions-retrieve.component';

describe('TestQuestionsRetrieveComponent', () => {
  let component: TestQuestionsRetrieveComponent;
  let fixture: ComponentFixture<TestQuestionsRetrieveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestQuestionsRetrieveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestQuestionsRetrieveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
