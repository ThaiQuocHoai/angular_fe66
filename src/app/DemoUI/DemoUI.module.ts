import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AntDModule } from '../_core/share/AntD/Antd.module';
import { DemoUIComponent } from './DemoUI.component';


@NgModule({
    imports: [CommonModule, AntDModule],
    exports: [DemoUIComponent],
    declarations: [DemoUIComponent],
})
export class DemoUIModule { }
