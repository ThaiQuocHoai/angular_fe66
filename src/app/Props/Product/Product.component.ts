import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product',
  template: `
    <div class="card text-left">
      <img class="card-img-top" src="{{ product.img }}" alt="" />
      <div class="card-body">
        <h4 class="card-title">{{ product.name }}</h4>
        <p class="card-text">{{ product.price }}</p>
        <button
          data-toggle="modal"
          data-target="#modelId"
          class="btn btn-success"
          (click)="detail()"
        >
          Xem chi tiết
        </button>
      </div>
    </div>
  `,
})
export class ProductComponent implements OnInit {
  @Input() product!: Product;

  //thuoc tinh nay dung de dua du lieu ra component cha
  @Output() eventDetail = new EventEmitter();

  detail () {
      this.eventDetail.emit(this.product)
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
