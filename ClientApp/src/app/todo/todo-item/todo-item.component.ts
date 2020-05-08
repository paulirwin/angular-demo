import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../../models/Todo';

@Component({
    selector: 'app-todo-item',
    templateUrl: './todo-item.component.html',
    styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {

    @Input()
    todo: Todo;

    @Output()
    update = new EventEmitter<Todo>();

    @Input()
    saving: boolean;

    constructor() { }

    ngOnInit() {
    }

    updateTodo() {
        this.update.emit(this.todo);
    }
}
