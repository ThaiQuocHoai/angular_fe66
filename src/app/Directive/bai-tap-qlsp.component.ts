import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-qlsv',
  template: `
    <h3>Bai tap 6</h3>
    <div class="card">
      <div class="card-header bg-dark text-white">
        <h5>Quản lý danh mục sản phẩm</h5>
      </div>
      <div class="card-body">
        <div class="form-group">
          <p>Mã Sp</p>
          <input class="form-control" type="text" [(ngModel)]="sanPham.id" />
        </div>
        <div class="form-group">
          <p>Tên Sp</p>
          <input class="form-control" type="text" [(ngModel)]="sanPham.name" />
        </div>
        <div class="form-group">
          <p>Giá Sp</p>
          <input class="form-control" type="text" [(ngModel)]="sanPham.price" />
        </div>
        <div class="form-group">
          <button class="btn btn-success" (click)="themSanPham()">Thêm sản phẩm</button>
        </div>
      </div>
    </div>
    <table class="table">
      <thead class="bg-dark text-light">
        <tr>
          <th>STT</th>
          <th>Mã</th>
          <th>Tên</th>
          <th>Giá</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let product of arrProduct; let i = index;" [ngClass]="{'bg-secondary':(i+1)%2===0}">
            <td>{{i+1}}</td>
            <td>{{product.id}}</td>
            <td>{{product.name}}</td>
            <td>{{product.price}}</td>
        </tr>
      </tbody>
    </table>
  `,
})
export class QlspComponent implements OnInit {

    sanPham:Product = {
        id:'',
        name:'',
        price:0
    }

  arrProduct:Product[] = [
    {id: 'ip', name: 'iphone', price: 1000},
    {id: 'ss', name: 'samsung', price: 1000},
    {id: 'sn', name: 'sony', price: 1000}
  ];

  themSanPham = () => {
    this.arrProduct.push({...this.sanPham});
  }

  constructor() {}

  ngOnInit() {}
}

class Product {
  id: string = '';
  name: string = '';
  price: number = 0;
}
