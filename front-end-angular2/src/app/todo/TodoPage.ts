import {Component, View, bootstrap} from 'angular2/angular2';
import {TodoComponent} from "./TodoComponent";

@Component({})
@View({
    directives: [TodoComponent],
    template: `
        <todo></todo>
    `
})
export class TodoPage {
}

