import {Inject} from 'angular2/angular2';
import {Http} from 'angular2/http'

export class ItemsService {

    result: Object;
    error: Object;
    http: Http;
    url: string;

    constructor(@Inject http: Http) {
        this.http = http;
        this.url = 'http://localhost:7222';
        console.log("Created ItemsService")
    }

    getAllItems(){
        return this.http
            .get(this.url + '/api/items');
    }

    getItemForId(id){
        return this.http
            .get(this.url + '/api/item/' + id);
    }

}