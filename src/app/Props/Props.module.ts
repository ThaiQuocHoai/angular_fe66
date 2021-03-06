import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DemoPropsComponent } from './DemoProps.component';
import { ProductComponent } from './Product/Product.component';
import { ProductListComponent } from './ProductList/ProductList.component';


@NgModule({
    imports: [CommonModule],
    exports: [DemoPropsComponent],
    declarations: [
        DemoPropsComponent,
        ProductComponent,
        ProductListComponent
    ],
})
export class PropsModule { }
