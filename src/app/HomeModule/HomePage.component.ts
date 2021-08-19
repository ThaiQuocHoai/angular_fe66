import { Component, OnInit } from '@angular/core';
import { QuanLyPhimService } from '../AdminModule/QuanLyPhim.service';

@Component({
  selector: 'app-home-page',
  template: `
    <div>
      <h3>Danh Sach Phim</h3>
      <div class="row">
        <div class="col-4 mt-2" *ngFor="let phim of mangPhim">
          <div class="card text-left">
            <img class="card-img-top" [src]="phim.hinhAnh" alt="">
            <div class="card-body">
              <h4 class="card-title">{{phim.tenPhim}}</h4>
              <p class="card-text">{{phim.moTa}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class HomePageComponent implements OnInit {
  mangPhim: any[] = [];

  constructor(private qlPhim: QuanLyPhimService) {}

  ngOnInit() {
    this.qlPhim.layDanhSachPhim().subscribe(
      (result: any) => {
        console.log('result', result.content);
        this.mangPhim = result.content;
      },
      (error) => {
        console.log(error.error);
      }
    );
  }
}
