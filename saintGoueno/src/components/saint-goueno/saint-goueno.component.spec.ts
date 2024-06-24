import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaintGouenoComponent } from './saint-goueno.component';

describe('SaintGouenoComponent', () => {
  let component: SaintGouenoComponent;
  let fixture: ComponentFixture<SaintGouenoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SaintGouenoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaintGouenoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
