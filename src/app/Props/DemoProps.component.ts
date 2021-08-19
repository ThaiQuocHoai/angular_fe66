import { Component, ElementRef, OnInit, ViewChild, ViewChildren, QueryList } from '@angular/core';
import { ProductListComponent } from './ProductList/ProductList.component';

@Component({
  selector: 'app-demo-props',
  template: `
    <div class="container">
      <h1 class="font-weight-bold">@input</h1>
      <app-product-list #tagProductList></app-product-list>

      <p #tagP>Ahihi</p>
      <button (click)="viewDom()">DOM</button>

      <hr />

      <div style="padding-bottom: 100px;">
          <h1>Thông tin sản phẩm</h1>
          <div class="form-group">
            <p>id</p>
            <input class="form-control" #id />
          </div>
          <div class="form-group">
            <p>name</p>
            <input class="form-control" #name />
          </div>
          <div class="form-group">
            <p>price</p>
            <input class="form-control" #price />
          </div>
          <div class="form-group">
            <p>image</p>
            <input class="form-control" #img />
          </div>
          <div class="form-group">
            <button class="btn btn-outline-success"
            (click)="addProduct(id.value, name.value, price.value, img.value)"
            >Add Product</button>
          </div>
      </div>

      <hr />


    </div>
  `,
})
export class DemoPropsComponent implements OnInit {
  @ViewChild('tagP') tagP!: ElementRef;
  @ViewChild('tagProductList') tagProductList!: ProductListComponent;

  addProduct(id:string, name:string, price:string, img:string){
    let product:Product = {id:Number(id), name: name, price: Number(price), img: img};
    this.tagProductList.products.push(product);
  }

  viewDom() {
      this.tagP.nativeElement.innerHTML = 'ABC'
  }

  constructor() {}

  ngOnInit() {}
}

interface Product {
    id: number;
    name: string;
    price: number;
    img: string;
  }
  
