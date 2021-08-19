import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BaiTapDatGheComponent } from './BaiTapDatGhe.component';
import { CartComponent } from './Cart.component';
import { GheComponent } from './Ghe.component';

@NgModule({
    imports: [CommonModule],
    exports: [BaiTapDatGheComponent],
    declarations: [BaiTapDatGheComponent, GheComponent, CartComponent],
})
export class BaiTapDatGheModule { }
