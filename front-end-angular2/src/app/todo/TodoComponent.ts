import {Component, Input, View, Inject, ControlGroup, Validators, FormBuilder, NgFor, FORM_DIRECTIVES} from 'angular2/angular2';
import {TodoRecord} from './model/TodoRecord';
import {TodoService} from "./TodoService";

@Component({
    selector: 'todo'
})
@View({
    styleUrls: ['app/todo/todo.css'],
    directives: [NgFor, FORM_DIRECTIVES],
    template: `
        <div class="todo_container">
            <p class="todo_title">ToDo list</p>

            <div id="todo_form_container">
                <form onsubmit="return false;" (submit)="add(todoInput.value)" [ng-form-model]="todoForm">
                    <input type="text" #todo-input ng-control="message" placeholder="What do you have to do?" class="todo_input" />
                    <button type="submit" class="todo_button">+</button>
                </form>

                <div id="todo_list_container">
                    <h3 class="nothing_to_do" [hidden]="todoList.length">Nothing to do. Go play outside!</h3>
                    <div class="todo_item" *ng-for="#t of todoList;">
                        <span>{{t.message}}</span>
                        <button type="button" (click)="remove(t.createdAt)" class="todo_exclude_item">x</button>
                    </div>
                </div>
            </div>
        </div>
`})
export class TodoComponent {
    todo: TodoRecord;
    todoForm: ControlGroup;
    todoList: TodoRecord[] = [];
    private todoService: TodoService = new TodoService();

    todoInput : any;

    constructor(@Inject(FormBuilder) fb: FormBuilder) {

        this.todoForm = fb.group({
            "message": ["", Validators.required]
        });
    }

    add(message: string):void {
        this.todo = new TodoRecord(message);

        this.todoService
            .add(this.todo)
            .subscribe(result => {
                this.todoList.push(result);
                this.todoForm.controls.message.updateValue("");
                console.log(this.todoList);
            });
    }

    remove(id: number):void {
        this.todoService
            .remove(id)
            .subscribe(id => {
                this.todoList.forEach((tl, index) => {
                    if (tl.createdAt === id) {
                        return this.todoList.splice(index, 1);
                    };
                });
                console.log(this.todoList);
            });
    }

}

