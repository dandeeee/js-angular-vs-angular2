import {Component, View, bootstrap} from 'angular2/angular2';
import {RouterLink} from 'angular2/router';

@Component({
    selector: 'topnav'
})
@View({
    directives: [RouterLink],
    template: `
        <section class="sample-app-content">
            <nav>
                <a [router-link]="['/Main']">Home</a>
                <a [router-link]="['/Todo']">Todos</a>
                <a [router-link]="['/Items']">Items</a>
            </nav>
        </section>
    `
})
export class TopnavComponent {
}

