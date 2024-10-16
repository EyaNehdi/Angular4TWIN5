import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent  implements OnInit , OnDestroy {
  search: string = '';
  listProducts: Product[] = [];
  id!: number;
  constructor(private activated: ActivatedRoute) {}
  ngOnDestroy() {
    console.log("destroy component");
  }
  ngOnInit() {
    console.log('init component');

    this.listProducts = [
      {
        id: 1,
        name: 'Refrigérateur LG Inox',
        image: 'assets/images/product1.jpg',
        categoryId: 1,
        description: '',
        price: 2800,
        brand: 'LG',
        promotion: 0,
        nbLikes: 0,
        quantity: 10,
      },
      {
        id: 2,
        name: 'Refrigérateur Samsung Blanc',
        image: 'assets/images/product3.jpeg',
        categoryId: 1,
        description: '',
        price: 2400,
        brand: 'Samsung',
        promotion: 0,
        nbLikes: 0,
        quantity: 10,
      },
      {
        id: 3,
        name: 'Lave vaisselle Beko',
        image: 'assets/images/product4.jpeg',
        categoryId: 1,
        description: '',
        price: 1875,
        brand: 'BEKO',
        promotion: 0,
        nbLikes: 0,
        quantity: 10,
      },
      {
        id: 4,
        name: 'Oppo Smart Phone',
        image: 'assets/images/product5.jpeg',
        categoryId: 4,
        description: '',
        price: 1200,
        brand: 'OPPO',
        promotion: 0,
        nbLikes: 0,
        quantity: 10,
      },
      {
        id: 5,
        name: 'Hachoir',
        image: 'assets/images/product6.jpeg',
        categoryId: 2,
        description: '',
        price: 120,
        brand: 'Moulinex',
        promotion: 0,
        nbLikes: 0,
        quantity: 10,
      },
      {
        id: 6,
        name: "TV 50'' LG",
        image: 'assets/images/product7.jpeg',
        categoryId: 5,
        description: '',
        price: 1800,
        brand: 'LG',
        promotion: 0,
        nbLikes: 0,
        quantity: 10,
      },
    ];
    this.id = this.activated.snapshot.params['id'];
    console.log('Snapshot method : ');
    console.log(this.activated.snapshot.params['id']);
    console.log('params :');
    this.activated.params.subscribe({
      next: (p) => console.log(p['id']),
    });
    console.log('paramMap');
    this.activated.paramMap.subscribe({
      next: (p) => console.log(p.get('id')),
    });
    this.listProducts = this.listProducts.filter(
      (pr) => pr.categoryId == this.id
    );
  }

  increment(Product: Product) {
    Product.nbLikes++;
  }

  buy(Product: Product) {
    Product.quantity--;
  }
}
