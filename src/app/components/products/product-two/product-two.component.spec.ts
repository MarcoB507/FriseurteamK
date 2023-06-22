import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductTwoComponent } from './product-two.component';

describe('ProductTwoComponent', () => {
  let component: ProductTwoComponent;
  let fixture: ComponentFixture<ProductTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductTwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
