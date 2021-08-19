import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-ghe',
  template: `
    <h3 class="p-2" style="background-color: lightgray; border-radius: 15px;">
      Tài Xế
    </h3>
    <div class="row">
      <div class="col-3" *ngFor="let ghe of danhSachGhe">
        <button
          [ngClass]="{
            'btn btn-secondary': !ghe.TrangThai,
            'btn btn-success': ghe.TrangThai,
            'btn btn-danger': ghe.SoGhe === 30 || ghe.SoGhe === 36
          }"

          [disabled]="ghe.SoGhe === 30 || ghe.SoGhe === 36 ? true: false"
          
          style="display: block; width: 50px; height: 50px; margin-bottom: 15px;"
          (click)="datGhe(ghe.SoGhe)"
        >
          {{ ghe.SoGhe }}
        </button>
      </div>
    </div>
  `,
})
export class GheComponent implements OnInit {
  @Input() danhSachGhe!: IDanhSachGhe[];

  @Output() datVeEmit = new EventEmitter();

  
  datGhe(soGhe:number){
      this.datVeEmit.emit(soGhe)
      
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
