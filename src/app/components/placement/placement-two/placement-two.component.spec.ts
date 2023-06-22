import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlacementTwoComponent } from './placement-two.component';

describe('PlacementTwoComponent', () => {
  let component: PlacementTwoComponent;
  let fixture: ComponentFixture<PlacementTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlacementTwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlacementTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
