import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductOneComponent } from './product-one.component';

describe('ProductOneComponent', () => {
  let component: ProductOneComponent;
  let fixture: ComponentFixture<ProductOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductOneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
