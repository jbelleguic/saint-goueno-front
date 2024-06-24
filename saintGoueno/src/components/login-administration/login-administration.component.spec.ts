import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginAdministrationComponent } from './login-administration.component';

describe('LoginAdministrationComponent', () => {
  let component: LoginAdministrationComponent;
  let fixture: ComponentFixture<LoginAdministrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginAdministrationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginAdministrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
