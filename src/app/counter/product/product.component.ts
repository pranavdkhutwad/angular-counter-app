import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'cnt-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.css']
})
export class ProductComponent {
    // counter: number = 0;
    // imgUrl: string = 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJvb2t8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60';
    
    @Input()
    product: any = {};

    @Output()
    incrementEvt = new EventEmitter();

    @Output()
    decrementEvt = new EventEmitter();

    @Output()
    deleteEvt = new EventEmitter();

    isShow: boolean = true;

    handleIncrement() {
        console.log('handle increment');
        this.incrementEvt.emit(this.product.id);
    }

    handleDecrement() {
        this.decrementEvt.emit(this.product.id);
    }

    handleDelete() {
        this.deleteEvt.emit(this.product.id);
    }
}