import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppsChooseComponent } from './apps-choose.component';

describe('AppsChooseComponent', () => {
  let component: AppsChooseComponent;
  let fixture: ComponentFixture<AppsChooseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppsChooseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppsChooseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
