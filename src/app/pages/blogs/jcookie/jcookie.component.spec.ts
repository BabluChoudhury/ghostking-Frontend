import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JcookieComponent } from './jcookie.component';

describe('JcookieComponent', () => {
  let component: JcookieComponent;
  let fixture: ComponentFixture<JcookieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JcookieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JcookieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
