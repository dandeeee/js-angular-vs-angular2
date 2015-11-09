import {Component, View, CORE_DIRECTIVES,} from 'angular2/angular2';
import {Http} from 'angular2/http'
import {RouteParams} from 'angular2/router';
import {ItemsService} from "./ItemsService";
import {TopnavComponent} from "../topnav/TopnavComponent";

@Component({
    selector: 'itemslist'
})
@View({
    directives: [TopnavComponent, CORE_DIRECTIVES],
    template: `
        <div>
            <h1>{{item.id}}</h1>
            <h2>{{item.title}}</h2>
            <h3>{{item.data}}</h3>
        </div>
        <hr>
        <topnav></topnav>
    `
})
export class ItemDetailsComponent {
    id: any;
    service: ItemsService;
    item: Object = {};
    routeParam: RouteParams;

    constructor(routeParam: RouteParams, srv: ItemsService){
        this.service = srv;
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



