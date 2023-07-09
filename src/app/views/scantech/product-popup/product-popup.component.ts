import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Product } from 'src/models/product';

@Component({
  selector: 'app-product-popup',
  templateUrl: './product-popup.component.html',
  styleUrls: ['./product-popup.component.scss']
})
export class ProductPopupComponent implements OnInit {
  data: Product;

  constructor(@Inject(MAT_DIALOG_DATA) public dialogData: Product) {
    this.data = dialogData;
  }

  ngOnInit(): void {
  }
}