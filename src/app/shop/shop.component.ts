import { ShopParams } from './../shared/models/shopParams';
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

  shopParams = new ShopParams();

  sortOptions = [
    { name: 'Alphabetical', value: 'name' },
    { name: 'Price: Low to high', value: 'priceAsc' },
    { name: 'Price: High to low', value: 'priceDesc' }
  ];

  totalCount = 0;

  constructor(private shopService: ShopService) { }

  ngOnInit(): void {
    this.getProducts();
    this.getTypes();
  }

  getProducts() {
    this.shopService.getProducts(this.shopParams).subscribe({
      next: response => {
        this.products = response.data;
        this.shopParams.pageNumber = response.pageIndex;
        this.shopParams.pageSize = response.pageSize;
        this.totalCount = response.count;
      },

      error: error => console.log(error),
      complete: () => console.log('Request has completed')
    })
  }

  getTypes() {
    this.shopService.getTypes().subscribe({
      next: response => this.types = [{ id: 0, name: 'All' }, ...response],
      error: error => console.log(error),
      complete: () => console.log('Request has completed')
    })
  }

  onTypeSelected(typeId: number) {
    this.shopParams.typeId = typeId;
    this.getProducts();
  }

  onSortSelected(event: any) {
    this.shopParams.sort = event.target.value;
    this.getProducts();
  }
}
