import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component'
import { MovementsComponent } from './movements/movements.component'
import { AccountsComponent } from './accounts/accounts.component'


const routes: Routes = [
    {
        path: '',
        data: {
          title: 'Scantech',
        },
        children: [
            {
                path: 'products',
                component: ProductsComponent,
                data: {
                  title: 'products',
                },
              },
              {
                path: 'movements',
                component: MovementsComponent,
                data: {
                  title: 'movements',
                },
              },
              {
                path: 'accounts',
                component: AccountsComponent,
                data: {
                  title: 'accounts',
                },
              },
        ],
      }
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
  })
  export class ScantechRoutingModule {}