import {Component, View, NgFor, CORE_DIRECTIVES} from 'angular2/angular2';
import {Http} from 'angular2/http'
import { RouterLink, RouteParams } from 'angular2/router';
import {ItemsService} from "./ItemsService";

@Component({
    selector: 'itemslist'
})
@View({
    directives: [NgFor, CORE_DIRECTIVES],
    template: `
        <div>
            <h1>{{item.id}}</h1>
            <h2>{{item.title}}</h2>
            <h3>{{item.data}}</h3>
        </div>
    `
})
export class ItemDetailsComponent {
    id: any;
    service: ItemsService;
    item: Object = {};
    routeParam: RouteParams;

    constructor(http: Http, routeParam: RouteParams) {
        this.service = new ItemsService(http);
        this.routeParam = routeParam;
        this.id = this.routeParam.get('id');
        this.getItem();
    }

    getItem() {
        this.service
            .getItemForId(this.id)
            .subscribe((res) => {
                this.item = res.json();
            })
    }
}



