import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotSaleTopProductsComponent } from './hot-sale-top-products.component';

describe('HotSaleTopProductsComponent', () => {
  let component: HotSaleTopProductsComponent;
  let fixture: ComponentFixture<HotSaleTopProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotSaleTopProductsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HotSaleTopProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
