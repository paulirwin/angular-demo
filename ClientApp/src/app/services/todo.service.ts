import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Todo } from '../models/Todo';

@Injectable({
    providedIn: 'root'
})
export class TodoService {

    constructor(private http: HttpClient) { }

    getAll(): Observable<Todo[]> {
        return this.http.get<Todo[]>("/api/todos");
    }

    create(todo: Todo): Observable<Todo> {
        return this.http.post<Todo>("/api/todos", todo);
    }

    update(todo: Todo): Observable<void> {
        return this.http.put<void>(`/api/todos/${todo.id}`, todo);
    }
}
