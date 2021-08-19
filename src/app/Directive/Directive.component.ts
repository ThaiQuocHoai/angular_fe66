import { Component, OnInit } from '@angular/core';
import { NzButtonSize } from 'ng-zorro-antd/button';

@Component({
  selector: 'app-directive',
  template: `
    <div class="container">
      <h3 class="text-center">Demo Direction</h3>
      <h3>*ngIf hiển thị hoặc không</h3>
      <p *ngIf="status">Title: Hoai</p>
      <button class="btn btn-primary" (click)="anHien()">Ẩn/hiện</button>
      <div class="form-group">
        <input type="text" class="form-control" #inputNumber />
        <button
          class="btn btn-outline-success"
          (click)="changeNumber(inputNumber.value)"
        >
          OK
        </button>
      </div>
      <h3>Số: {{ number }}</h3>
      <div *ngIf="number % 2 === 0">Số chẵn</div>
      <div *ngIf="number % 2 !== 0">Số lẻ</div>
      <h3>Ví dụ:</h3>
      <nav class="navbar navbar-expand-sm navbar-dark bg-primary">
        <a class="navbar-brand" href="#">Navbar</a>
        <button
          class="navbar-toggler d-lg-none"
          type="button"
          data-toggle="collapse"
          data-target="#collapsibleNavId"
          aria-controls="collapsibleNavId"
          aria-expanded="false"
          aria-label="Toggle navigation"
        ></button>
        <div class="collapse navbar-collapse" id="collapsibleNavId">
          <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
            <li class="nav-item active">
              <a class="nav-link" href="#"
                >Home <span class="sr-only">(current)</span></a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Link</a>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="dropdownId"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                >Dropdown</a
              >
              <div class="dropdown-menu" aria-labelledby="dropdownId">
                <a class="dropdown-item" href="#">Action 1</a>
                <a class="dropdown-item" href="#">Action 2</a>
              </div>
            </li>
          </ul>
          <form class="form-inline my-2 my-lg-0">
            <div class="nav-item" *ngIf="isLogin; else divLogin">
              <a class="nav-link text-white" href="#">{{ userName }}</a>
              <a href="#" class="nav-link text-white" (click)="logout()"
                >Logout</a
              >
            </div>
          </form>
        </div>
      </nav>
      <hr />
      <h3>*ngSwitch</h3>
      <div [ngSwitch]="color">
        <div *ngSwitchCase="'red'" style="color: red;">red</div>
        <div *ngSwitchCase="'blue'" style="color: blue;">blue</div>
        <div *ngSwitchCase="'green'" style="color: green;">green</div>
        <div *ngSwitchDefault style="color: orange;">Defalut</div>
      </div>
      <select class="form-control" [(ngModel)]="color">
        <option value="red">red</option>
        <option value="green">green</option>
        <option value="blue">blue</option>
        <option value="default">default</option>
      </select>

      <hr />

      <h3>*ngFor: dùng chạy dòng for</h3>
      <div class="row">
        <div class="col-4" *ngFor="let product of arrProduct; let i = index">
          .
          <div class="card text-left">
            <img class="card-img-top" src="{{ product.image }}" alt="" />
            <div class="card-body">
              <h4 class="card-title">{{ product.name }}</h4>
              <p class="card-text">{{ product.price.toLocaleString() }}</p>
              <button class="btn btn-outline-success">Mua</button>
            </div>
          </div>
        </div>
      </div>

      <table class="table">
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>price</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <ng-container *ngIf="arrProduct">
            <tr
              *ngFor="let pro of arrProduct"
              [ngClass]="{
                'bg-dark text-light': pro.id % 2 !== 0,
                'bg-success text-white': pro.id % 2 === 0
              }"
            >
              <td>{{ pro.id }}</td>
              <td>{{ pro.name }}</td>
              <td>{{ pro.price.toLocaleString() }}</td>
              <td><button class="btn btn-success">Mua</button></td>
            </tr>
          </ng-container>
        </tbody>
      </table>

      <hr />
      <h3>ngStyle</h3>
      <p [ngStyle]="{ 'font-size': fontSize + 'px' }">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique
        deleniti maxime nisi quas reiciendis est quisquam illum molestias
        eligendi ratione.
      </p>
      <button class="btn btn-outline-danger" (click)="giamFont()">-</button>
      <button class="btn btn-outline-success" (click)="tangFont()">+</button>

      <ng-template #divLogin>
        <div class="nav-item">
          <a class="nav-link text-white" href="#" (click)="login()">Login</a>
        </div>
      </ng-template>

      <hr />
      <app-login-directive></app-login-directive>
      <hr />
      <app-qlsv></app-qlsv>
      <hr />
      <h3>Directive antd</h3>
      <button nz-button nzType="primary">Default Button</button>
      <button nz-button nzType="primary" [nzSize]="size" nzShape="round">
        <i nz-icon nzType="download"></i>
        Download
      </button>

      <h3>Directed Material</h3>
      <button mat-button color="accent">Accent</button>
      <button mat-raised-button color="accent">Accent</button>
      <button
        mat-icon-button
        color="warn"
        aria-label="Example icon button with a heart icon"
      >
        <mat-icon>favorite</mat-icon>
      </button>
    </div>
  `,
})
export class DirectiveComponent implements OnInit {
  arrProduct: any[] = [
    {
      id: 1,
      name: 'iphone 1',
      price: 1000,
      image: 'https:///picsum.photos/id/2/200/200',
    },
    {
      id: 2,
      name: 'iphone 2',
      price: 2000,
      image: 'https:///picsum.photos/id/3/200/200',
    },
    {
      id: 3,
      name: 'iphone 3',
      price: 3000,
      image: 'https:///picsum.photos/id/4/200/200',
    },
  ];

  size: NzButtonSize = 'large';
  //   arrProduct: any = undefined;
  tangFont = () => {
    this.fontSize++;
  };

  giamFont = () => {
    this.fontSize--;
  };

  fontSize: number = 15;
  status: boolean = true;
  number: number = 1;
  userName: string = 'Hoai';
  isLogin: boolean = true;
  color: string = 'red';

  logout = () => {
    this.isLogin = false;
  };
  login = () => {
    this.isLogin = true;
  };

  changeNumber = (newNumber: string) => {
    this.number = Number(newNumber);
  };

  anHien = () => {
    this.status = !this.status;
  };

  constructor() {}

  ngOnInit() {}
}
