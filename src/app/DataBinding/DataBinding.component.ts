import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding',
  template: `
    <div class="container p-5 m-5">
      <h1>Oneway binding</h1>
      <h3>- Interpolation</h3>
      <p>{{ title }}</p>
      <input type="text" value="{{ title }}" />
      <h3>-Property Binding</h3>
      <div [innerHTML]="title"></div>
      <h3>-Event binding</h3>
      <input type="text" #inputTitle />
      <br />
      <br />
      <button
        class="btn btn-outline-success"
        (click)="changTitle(inputTitle.value)"
      >
        Change title
      </button>
      <h1>Twoway binding</h1>
      <input type="text" [(ngModel)]="title" />
      <hr />
      <table class="table">
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>quantity</th>
            <th>price</th>
            <th>total</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
            <tr *ngFor="let item of arrProduct">
                <td>{{item.id}}</td>
                <td>{{item.name}}</td>
                <td><input type="text" class="form-control" [(ngModel)]="item.quantity" ></td>
                <td>{{item.price}}</td>
                <th>{{item.price*item.quantity}}</th>
            </tr>
        </tbody>
      </table>
    </div>
    <div class="register container">
        <app-register></app-register>
    </div>
  `,
})

///MVVMs

//binding type:
//-interpolation
export class DataBindingComponent implements OnInit {
  //tất cả các dữ liệu hiển thị trên giao diện đều phải quản lí bởi thuộc tínhc của model
  title: string = 'Hello Hoai';

  arrProduct: Product[] = [
    { id: '1', name: 'iphone', price: 1000, quantity: 10 },
    { id: '2', name: 'iphone x', price: 2000, quantity: 20 },
    { id: '3', name: 'iphone xs', price: 3000, quantity: 30 },
  ];

  changTitle = (title: string) => {
    this.title = title;
  };

  constructor() {}

  ngOnInit() {}
}

interface Product {
  id: string;
  name: string;
  price: number;
  quantity: number;
}
