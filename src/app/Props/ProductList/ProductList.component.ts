import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { ProductComponent } from '../Product/Product.component';

@Component({
  selector: 'app-product-list',
  template: `
    <div class="row">
      <div class="col-4" *ngFor="let product of products">
        <app-product
          (eventDetail)="detail($event)"
          [product]="product"
        ></app-product>
      </div>
      
    </div>

    <button class="my-5 btn btn-success" (click)="changePrice()" >Change price</button>

    <!-- Modal -->
    <div
      class="modal fade"
      id="modelId"
      tabindex="-1"
      role="dialog"
      aria-labelledby="modelTitleId"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h3 class="modal-title">Detail</h3>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="container-fluid">
              <img style="width: 70%; height: 250px; margin-bottom: 15px;" src="{{ productDetail.img }}" alt="" />
              <p>id: {{ productDetail.id }}</p>
              <p>name: {{ productDetail.name }}</p>
              <p>price: {{ productDetail.price.toLocaleString() }}</p>
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
            <!-- <button type="button" class="btn btn-primary">Save</button> -->
          </div>
        </div>
      </div>
    </div>
  `,
})
export class ProductListComponent implements OnInit {

  @ViewChildren(ProductComponent) dsTagProduct!: QueryList<ProductComponent>

  productDetail: Product = {
    id: 1,
    name: 'Iphone',
    price: 1000,
    img: 'https://picsum.photos/id/18/200/300',
  };

  detail(objectEmit: any) {
      this.productDetail = objectEmit;
  }

  changePrice() {
    this.dsTagProduct.forEach((tagProduct:ProductComponent, index)=>{
        tagProduct.product.price *=1.05;
    })
  }

  products: Product[] = [
    {
      id: 1,
      name: 'Iphone',
      price: 1000,
      img: 'https://picsum.photos/id/18/200/300',
    },
    {
      id: 2,
      name: 'Iphone xs',
      price: 2000,
      img: 'https://picsum.photos/id/19/200/300',
    },
    {
      id: 3,
      name: 'Iphone xs max',
      price: 3000,
      img: 'https://picsum.photos/id/20/200/300',
    },
  ];

  constructor() {}

  ngOnInit() {}
}

interface Product {
  id: number;
  name: string;
  price: number;
  img: string;
}
