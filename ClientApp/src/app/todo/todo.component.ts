import { Component, OnInit } from '@angular/core';
import { Todo } from '../models/Todo';
import { TodoService } from '../services/todo.service';

@Component({
    selector: 'app-todo',
    templateUrl: './todo.component.html',
    styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

    todos: Todo[] = [];

    newTitle: string;
    saving: boolean;

    constructor(private todoService: TodoService) { }

    async ngOnInit() {
        try {
            this.todos = await this.todoService.getAll().toPromise();
        } catch {
            alert("Error!");
        }
    }

    async createTodo() {
        this.saving = true;

        const todo = await this.todoService.create({
            title: this.newTitle,
            complete: false
        }).toPromise();

        this.todos.push(todo);
        this.newTitle = "";

        this.saving = false;
    }

    async updateTodo(todo: Todo) {
        this.saving = true;

        await this.todoService.update(todo).toPromise();

        this.saving = false;
    }
}
