import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products/products.component';
import { MovementsComponent } from './movements/movements.component';
import { AccountsComponent } from './accounts/accounts.component';
import { ScantechRoutingModule } from './scantech-routing';
import { MovementPopupComponent } from './movement-popup/movement-popup.component';
import { ProductPopupComponent } from './product-popup/product-popup.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ProductsComponent,
    MovementsComponent,
    AccountsComponent,
    MovementPopupComponent,
    ProductPopupComponent
  ],
  imports: [
    CommonModule,
    ScantechRoutingModule,
  ]
})
export class ScantechModule { }
