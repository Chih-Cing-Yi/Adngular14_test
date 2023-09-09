import { Component } from '@angular/core';
import { ProductRepresentation } from '../services/api/models/product-representation';
import { ProductService } from '../services/api/products/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.scss'],
})
export class NewProductComponent {
  product: ProductRepresentation = {};

  //依賴注入
  constructor(private service: ProductService, private router: Router) {}

  //儲存事件 成功就導向products頁面
  saveProduct() {
    this.service.createProduct(this.product).subscribe({
      next: (reslut: ProductRepresentation) => {
        this.router.navigate(['products']);
      },
    });
  }
}
