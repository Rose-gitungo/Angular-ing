import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductAddServiceComponent } from './product-add-service.component';

describe('ProductAddServiceComponent', () => {
  let component: ProductAddServiceComponent;
  let fixture: ComponentFixture<ProductAddServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductAddServiceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductAddServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
