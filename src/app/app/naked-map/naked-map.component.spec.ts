import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NakedMapComponent } from './naked-map.component';

describe('NakedMapComponent', () => {
  let component: NakedMapComponent;
  let fixture: ComponentFixture<NakedMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NakedMapComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NakedMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
