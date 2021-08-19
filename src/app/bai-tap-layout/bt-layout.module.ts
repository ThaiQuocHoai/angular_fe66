import { NgModule } from '@angular/core';
import { FooterComponent } from '../footer-layout/footer-layout.component';
import { HeaderComponent } from '../header/header.component';
import { LeftComponent } from '../left-layout/left-layout.component';
import { RightComponent } from '../right-layout/right-layout.component';
import { BaiTapLayoutComponent } from './bai-tap-layout.component';

@NgModule({
  imports: [], //gắn các component khác vào module này
  exports: [BaiTapLayoutComponent], //trích xuất component hoặc phần tử angular cho người khác import vào sài
  declarations: [
    HeaderComponent,
    BaiTapLayoutComponent,
    LeftComponent,
    RightComponent,
    FooterComponent,
  ], //khai bao cac component thuoc module nay
  providers: [],
})
export class BaiTapLayoutModule {}
