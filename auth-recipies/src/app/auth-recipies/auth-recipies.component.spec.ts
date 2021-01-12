import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthRecipiesComponent } from './auth-recipies.component';

describe('AuthRecipiesComponent', () => {
  let component: AuthRecipiesComponent;
  let fixture: ComponentFixture<AuthRecipiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthRecipiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthRecipiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
