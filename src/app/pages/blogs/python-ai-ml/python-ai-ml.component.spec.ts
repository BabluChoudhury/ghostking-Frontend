import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PythonAiMlComponent } from './python-ai-ml.component';

describe('PythonAiMlComponent', () => {
  let component: PythonAiMlComponent;
  let fixture: ComponentFixture<PythonAiMlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PythonAiMlComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PythonAiMlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
