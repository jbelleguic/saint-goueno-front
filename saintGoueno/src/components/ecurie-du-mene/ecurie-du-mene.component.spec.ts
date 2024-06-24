import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcurieDuMeneComponent } from './ecurie-du-mene.component';

describe('EcurieDuMeneComponent', () => {
  let component: EcurieDuMeneComponent;
  let fixture: ComponentFixture<EcurieDuMeneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EcurieDuMeneComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EcurieDuMeneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
