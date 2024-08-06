import { createId, isCuid } from '@paralleldrive/cuid2';


console.log(
  isCuid(createId()), // true
  isCuid('not a cuid'), // false
);

export interface Basket {
  id: string;
  items: BasketItem[];
}

export interface BasketItem {
  id: number;
  productName: string;
  price: number;
  quantity: number;
  pictureUrl: string;
  type: string;
}

export class Basket implements Basket {
  id = createId();
  items: BasketItem[] = [];
}
