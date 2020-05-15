import { Todo } from "./Models/Todo.ts";

export interface AppState<T> {
  get(): Array<T>;
  insert(newObject: T): void;
  remove(existingObject: T): void;
}

export class TodoState implements AppState<Todo> {
  private todos = new Array<Todo>();

  get(): Array<Todo> {
    return this.todos;
  }

  insert(newTodo: Todo): void {
    this.todos.push(newTodo);
  }

  remove(todo: Todo): void {
    const index = this.todos.indexOf(todo);
    if (index >= 0) {
      this.todos.splice(index, 1);
    }
  }
}
