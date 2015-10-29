import {Component, View } from 'angular2/angular2';
import {ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy} from 'angular2/router';
import {ROUTER_DIRECTIVES, RouteConfig, Router, Location, Route} from 'angular2/router';
import {RouterLink, RouterOutlet} from 'angular2/router';
import {MainPage} from "./mainpage/MainPage";
import {TodoPage} from "./todo/TodoPage";
import {ItemsPage} from "./items/ItemsPage";
import {ItemDetailsComponent} from "./items/ItemDetailsComponent";

@Component({
    selector: 'app',
})
@View({
    directives: [ROUTER_DIRECTIVES, RouterOutlet],
    template: `
        <router-outlet></router-outlet>
    `
})
@RouteConfig([
    { path: '/', component: MainPage, as: 'Main' },
    { path: '/todo', component: TodoPage, as: 'Todo' },
    { path: '/items', component: ItemsPage, as: 'Items' },
    { path: '/item/:id', component: ItemDetailsComponent, as: 'ItemsDetails' }
])
export class AppCmp {
    router: Router;
    location: Location;
    constructor(router: Router, location: Location) {
        this.router = router;
        this.location = location;
    }
    getLinkStyle(path) {
        return this.location.path() === path;
    }
}
