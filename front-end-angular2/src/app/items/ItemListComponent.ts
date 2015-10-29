import {Component, View, NgFor, CORE_DIRECTIVES} from 'angular2/angular2';
import {Http} from 'angular2/http'
import {ItemsService} from "./ItemsService";
import {RouterLink} from 'angular2/router';

@Component({
    selector: 'itemslist'
})
@View({
    directives: [NgFor, RouterLink, CORE_DIRECTIVES],
    template: `
        <h1>Hey! Im Items-list!</h1>
        <div *ng-for="#i of items;">
            <a [router-link]="['/ItemsDetails',{'id': i.id}]">{{i.id}} {{i.title}}</a>
        </div>
    `
})
export class ItemListComponent {

    service: ItemsService;
    items: Object[] = [];

    constructor(http: Http){
        this.service = new ItemsService(http);
        this.service
            .getAllItems()
            .subscribe(res => this.items = res.json());
    }

}

