import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomValidationMessagesComponent } from './custom-validation-messages.component';

describe('CustomValidationMessagesComponent', () => {
  let component: CustomValidationMessagesComponent;
  let fixture: ComponentFixture<CustomValidationMessagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomValidationMessagesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomValidationMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
