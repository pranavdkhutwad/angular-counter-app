import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterComponent } from './counter.component';
import { ProductComponent } from './product/product.component';

@NgModule({
    declarations: [
        CounterComponent,
        ProductComponent
    ],
    imports: [
        CommonModule
    ],
    providers: [],
    exports: [CounterComponent]
})
export class CounterModule {

}