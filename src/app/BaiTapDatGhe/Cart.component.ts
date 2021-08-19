import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  template: `
    <div>
      <h1 class="text-warning" style="font-weight: 500;">
        Danh Sách Ghế Đã Đặt ({{danhSachGheDangDat.length}})
      </h1>
      <div *ngFor="let gheDangDat of danhSachGheDangDat">
        <h3>
          Ghế: {{ gheDangDat.TenGhe }} {{ gheDangDat.Gia }}$
          <a class="text-danger">[Huỷ]</a>
        </h3>
      </div>
      <h3 class="text-success alert alert-success">Tổng tiền: {{tinhTongTien()}}$</h3>
    </div>
  `,
})
export class CartComponent implements OnInit {
  @Input() danhSachGheDangDat!: IDanhSachGhe[];

  tinhTongTien(){
      return this.danhSachGheDangDat.reduce((tongTien:number, item:IDanhSachGhe)=>{
        return tongTien+= item.Gia;
      }, 0)
  }

  constructor() {}

  ngOnInit() {}
}

interface IDanhSachGhe {
  SoGhe: number;
  TenGhe: string;
  Gia: number;
  TrangThai: boolean;
}
