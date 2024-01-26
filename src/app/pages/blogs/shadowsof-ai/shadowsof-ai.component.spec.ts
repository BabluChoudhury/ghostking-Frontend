import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShadowsofAIComponent } from './shadowsof-ai.component';

describe('ShadowsofAIComponent', () => {
  let component: ShadowsofAIComponent;
  let fixture: ComponentFixture<ShadowsofAIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShadowsofAIComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShadowsofAIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
