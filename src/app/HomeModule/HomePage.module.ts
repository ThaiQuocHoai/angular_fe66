import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuanLyPhimService } from '../AdminModule/QuanLyPhim.service';
import { AboutComponent } from './About.component';
import { ContactComponent } from './Contact.component';
import { HeaderHomeComponent } from './HeaderHome.component';
import { HomePageComponent } from './HomePage.component';
import { HomeTemplateComponent } from './HomeTemplate.component';
import { LoginComponent } from './Login.component';
import { RegisterPageComponent } from './Register.component';

const HomeRoute: Routes = [
  {
    path: '',
    component: HomeTemplateComponent,
    children: [
      { path: '', component: HomePageComponent },
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterPageComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'about', component: AboutComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(HomeRoute), CommonModule],
  exports: [],
  declarations: [
    HomePageComponent,
    LoginComponent,
    ContactComponent,
    AboutComponent,
    RegisterPageComponent,
    HomeTemplateComponent,
    HeaderHomeComponent,
  ],
  providers:[QuanLyPhimService],
})
export class HomePageModule {}
