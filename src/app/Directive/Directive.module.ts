import { CommonModule } from '@angular/common';
//import CommonModule để sử dụng directive
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoginDirectiveComponent } from './Bai-tap-login.component';
import { QlspComponent } from './bai-tap-qlsp.component';
import { DirectiveComponent } from './Directive.component';
import { AntDModule } from '../_core/share/AntD/Antd.module';
import { MaterialModule } from '../_core/share/Material/Material.module';



@NgModule({
    declarations: [DirectiveComponent, LoginDirectiveComponent, QlspComponent],
    imports: [CommonModule, FormsModule, AntDModule, MaterialModule],
    exports: [DirectiveComponent],
})
export class DirectiveModule { }
