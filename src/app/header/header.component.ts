// Decorator
import { Component } from '@angular/core';

@Component({
    selector: 'cnt-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent {
    title: string = 'Counter application';
}
