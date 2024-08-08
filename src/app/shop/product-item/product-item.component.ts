import { Component, Input } from '@angular/core';
import { BasketService } from 'src/app/basket/basket.service';
import { Product } from 'src/app/shared/models/product';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent {
  @Input() productInput?: Product;

  constructor(private basketService: BasketService) { }

  addItemToBasket() {
    this.productInput && this.basketService.addItemToBasket(this.productInput);
  }
}
