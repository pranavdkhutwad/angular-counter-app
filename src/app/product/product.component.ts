import { Component } from '@angular/core';

@Component({
    selector: 'cnt-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.css']
})
export class ProductComponent {
    counter: number = 0;

    handleIncrement() {
        this.counter = this.counter + 1;
    }
}