import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Twhinh200120Component } from './twhinh200120/twhinh200120.component'
import { Twhinh204120Component } from './twhinh204120/twhinh204120.component'
import { Twhinh220120Component } from './twhinh220120/twhinh220120.component'
const routes: Routes = [
    {
        path: '',
        data: {
          title: 'Ln',
        },
        children: [
            {
                path: 'twhinh200120',
                component: Twhinh200120Component,
                data: {
                  title: 'twhinh200120',
                },
              },
              {
                path: 'twhinh204120',
                component: Twhinh204120Component,
                data: {
                  title: 'twhinh204120',
                },
              },
              {
                path: 'twhinh220120',
                component: Twhinh220120Component,
                data: {
                  title: 'twhinh220120',
                },
              },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
  })
  export class LnRoutingModule {}