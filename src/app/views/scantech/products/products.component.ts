import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Product } from 'src/models/product';
import { ProductService } from 'src/services/product.service';
import { ProductPopupComponent } from '../product-popup/product-popup.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  list: Product[] = [];

  constructor(private productService: ProductService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe(data => {
      this.list = data;
    });
  }

  getProduct(id: number) {
    this.productService.getProductById(id).subscribe(data => {
      this.openProductPopup(data);
    }, (error) => {
      // Handle error
    });
  }

  openProductPopup(product: Product) {
    this.dialog.open(ProductPopupComponent, {
      width: '50%',
      height: '50%',
      data: product
    });
  }
}
