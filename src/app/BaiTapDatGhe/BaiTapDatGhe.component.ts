import {
  Component,
  OnInit,
  Input,
  Output,
  ViewChild,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { GheComponent } from './Ghe.component';

@Component({
  selector: 'app-bai-tap-dat-ghe',
  template: `
    <div class="container">
      <div class="text-center mt-2">
        <h1 class="text-warning font-weight-bold display-4">
          Đặt Vé Xe Bus Hãng CyberSoft
        </h1>
        <div class="row">
          <div class="col-6" style="border-right: 1px solid lightgray;">
            <app-ghe [danhSachGhe]="danhSachGhe" (datVeEmit)="datGheParent($event)"></app-ghe>
          </div>

          <div class="col-6">
            <app-cart [danhSachGheDangDat]="danhSachGheDangDat"></app-cart>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class BaiTapDatGheComponent implements OnInit {

  danhSachGhe: IDanhSachGhe[] = [
    { SoGhe: 1, TenGhe: 'số 1', Gia: 100, TrangThai:true },
    { SoGhe: 2, TenGhe: 'số 2', Gia: 100, TrangThai:true },
    { SoGhe: 3, TenGhe: 'số 3', Gia: 100, TrangThai:true },
    { SoGhe: 4, TenGhe: 'số 4', Gia: 100, TrangThai:false },
    { SoGhe: 5, TenGhe: 'số 5', Gia: 100, TrangThai:false },
    { SoGhe: 6, TenGhe: 'số 6', Gia: 100, TrangThai:false },
    { SoGhe: 7, TenGhe: 'số 7', Gia: 100, TrangThai:false },
    { SoGhe: 8, TenGhe: 'số 8', Gia: 100, TrangThai:false },
    { SoGhe: 9, TenGhe: 'số 9', Gia: 100, TrangThai:false },
    { SoGhe: 10, TenGhe: 'số 10', Gia: 100, TrangThai:false },
    { SoGhe: 11, TenGhe: 'số 11', Gia: 100, TrangThai:false },
    { SoGhe: 12, TenGhe: 'số 12', Gia: 100, TrangThai:false },
    { SoGhe: 13, TenGhe: 'số 13', Gia: 100, TrangThai:false },
    { SoGhe: 14, TenGhe: 'số 14', Gia: 100, TrangThai:false },
    { SoGhe: 15, TenGhe: 'số 15', Gia: 100, TrangThai:false },
    { SoGhe: 16, TenGhe: 'số 16', Gia: 100, TrangThai:false },
    { SoGhe: 17, TenGhe: 'số 17', Gia: 100, TrangThai:false },
    { SoGhe: 18, TenGhe: 'số 18', Gia: 100, TrangThai:false },
    { SoGhe: 19, TenGhe: 'số 19', Gia: 100, TrangThai:false },
    { SoGhe: 20, TenGhe: 'số 20', Gia: 100, TrangThai:false },
    { SoGhe: 21, TenGhe: 'số 21', Gia: 100, TrangThai:false },
    { SoGhe: 22, TenGhe: 'số 22', Gia: 100, TrangThai:false },
    { SoGhe: 23, TenGhe: 'số 23', Gia: 100, TrangThai:false },
    { SoGhe: 24, TenGhe: 'số 24', Gia: 100, TrangThai:false },
    { SoGhe: 25, TenGhe: 'số 25', Gia: 100, TrangThai:false },
    { SoGhe: 26, TenGhe: 'số 26', Gia: 100, TrangThai:false },
    { SoGhe: 27, TenGhe: 'số 27', Gia: 100, TrangThai:false },
    { SoGhe: 28, TenGhe: 'số 28', Gia: 100, TrangThai:false },
    { SoGhe: 29, TenGhe: 'số 29', Gia: 100, TrangThai:false },
    { SoGhe: 30, TenGhe: 'số 30', Gia: 100, TrangThai:false },
    { SoGhe: 31, TenGhe: 'số 31', Gia: 100, TrangThai:false },
    { SoGhe: 32, TenGhe: 'số 32', Gia: 100, TrangThai:false },
    { SoGhe: 33, TenGhe: 'số 33', Gia: 100, TrangThai:false },
    { SoGhe: 34, TenGhe: 'số 34', Gia: 100, TrangThai:false },
    { SoGhe: 35, TenGhe: 'số 35', Gia: 100, TrangThai:false },
    { SoGhe: 36, TenGhe: 'số 36', Gia: 100, TrangThai:false },
  ];

  danhSachGheDangDat = this.danhSachGhe.filter(s=>s.TrangThai);

  datGheParent(value:any){
    let gheDangChon= this.danhSachGhe.find(s=>s.SoGhe === value);
    if(gheDangChon?.TrangThai){
        gheDangChon.TrangThai= false;
        this.danhSachGheDangDat = this.danhSachGhe.filter(s=>s.TrangThai);
        return;
    }
    if(gheDangChon?.TrangThai===false){
        gheDangChon.TrangThai = true;
        this.danhSachGheDangDat = this.danhSachGhe.filter(s=>s.TrangThai);
    }
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
