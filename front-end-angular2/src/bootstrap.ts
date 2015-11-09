import {provide, bootstrap} from 'angular2/angular2';

import {ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy} from 'angular2/router';
import {HTTP_PROVIDERS} from 'angular2/http';

import {AppCmp} from './app/app';
import {ItemsService} from "./app/items/ItemsService";

bootstrap(AppCmp, [
    HTTP_PROVIDERS,
    ROUTER_PROVIDERS,
    provide(ItemsService, {useClass: ItemsService}),
    provide(LocationStrategy, {useClass: HashLocationStrategy})
]);