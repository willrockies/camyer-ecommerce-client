import { Component, OnInit } from '@angular/core';
import { ShopService } from './shop.service';
import { Product } from '../shared/models/product';
import { Type } from '../shared/models/type';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {
  products: Product[] = [];
  types: Type[] = [];
  typeIdSelected = 0;
  constructor(private shopService: ShopService) {}

  ngOnInit(): void {
    this.getProducts();
    this.getTypes();
  }

  getProducts(){
    this.shopService.getProducts(this.typeIdSelected).subscribe({
      next: response => this.products = response.data,
      error: error => console.log(error),
      complete: () => console.log('Request has completed')
    })
  }

  getTypes(){
    this.shopService.getTypes().subscribe({
      next: response => this.types = [{id:0, name: 'All'}, ...response],
      error: error => console.log(error),
      complete: () => console.log('Request has completed')
    })
  }

  onTypeSelected(typeId: number){
    this.typeIdSelected = typeId;
    this.getProducts();
  }
}