import {Component, View} from 'angular2/angular2';
import {ItemListComponent} from "./ItemListComponent";
import {ItemsService} from "./ItemsService";

@Component({})
@View({
    directives: [ItemListComponent],
    template: `
        <itemslist></itemslist>
    `
})
export class ItemsPage {
}

