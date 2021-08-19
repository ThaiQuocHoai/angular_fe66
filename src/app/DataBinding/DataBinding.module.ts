import { NgModule } from '@angular/core';
import { DataBindingComponent } from './DataBinding.component';

//thu vien su dung 2wayBinding
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register.component';

@NgModule({
    declarations: [DataBindingComponent, RegisterComponent],
    imports: [FormsModule, CommonModule],
    exports: [DataBindingComponent],
})
export class DataBindingModule { }
