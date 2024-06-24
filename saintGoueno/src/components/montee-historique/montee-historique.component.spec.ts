import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonteeHistoriqueComponent } from './montee-historique.component';

describe('MonteeHistoriqueComponent', () => {
  let component: MonteeHistoriqueComponent;
  let fixture: ComponentFixture<MonteeHistoriqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MonteeHistoriqueComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MonteeHistoriqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
