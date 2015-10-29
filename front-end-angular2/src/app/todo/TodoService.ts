import {EventEmitter} from 'angular2/angular2';
import {TodoRecord} from './model/TodoRecord';

export class TodoService {

    add(todo: TodoRecord): EventEmitter {
        let _ee = new EventEmitter();
        setTimeout(() => _ee.next(todo));

        return _ee.toRx();
    }

    remove(id: number): EventEmitter {
        let _ee = new EventEmitter();
        setTimeout(() => _ee.next(id));

        return _ee.toRx();
    }
}
