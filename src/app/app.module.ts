import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BaiTapLayoutModule } from './bai-tap-layout/bt-layout.module';
import { DataBindingModule } from './DataBinding/DataBinding.module';
import { DemoComponent } from './demo/demo.component';
import { DirectiveModule } from './Directive/Directive.module';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PropsModule } from './Props/Props.module';
import { DemoUIModule } from './DemoUI/DemoUI.module';
import { Routes, RouterModule } from '@angular/router';
import { HomePageModule } from './HomeModule/HomePage.module';
import { AdminModule } from './AdminModule/Admin.module';
import { BaiTapDatGheModule } from './BaiTapDatGhe/BaiTapDatGhe.module';

registerLocaleData(en);

//dinh nghia router

const AppRoute: Routes = [
  {path: 'home', loadChildren: () => HomePageModule },
  {path: 'admin', loadChildren: () => AdminModule },
  {path: '', loadChildren: () => HomePageModule },
]


@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BaiTapLayoutModule,
    DataBindingModule,
    DirectiveModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    PropsModule,
    DemoUIModule,
    HomePageModule,
    BaiTapDatGheModule,
    RouterModule.forRoot(AppRoute)
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
