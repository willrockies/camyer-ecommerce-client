import { NgModule } from '@angular/core';

import { CheckoutComponent } from './checkout.component';
import { RouterModule } from '@angular/router';


const routes = [
  { path: '', component: CheckoutComponent }
];
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
})
export class CheckoutRoutingModule { }
