import { Component, ViewEncapsulation } from '@angular/core';
import { MenuService } from "./menu.service";
@Component({
    selector: 'example-home',
    templateUrl: './home.component.html',
    styleUrls: [ './home.component.scss' ],
    encapsulation: ViewEncapsulation.None
})
export class HomeComponent {
    title: string = `<img src="./assets/images/logo.png" alt="weui" height="21px" />`;

    constructor(public menuService: MenuService) {}
}
