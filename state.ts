import { Todo } from "./Models/Todo.ts";

export interface AppState<T> {
  get(): Set<T>;
  insert(newObject: T): void;
  remove(existingObject: T): void;
}

export class TodoState implements AppState<Todo> {
  private todos = new Set<Todo>();

  get() {
    return this.todos;
  }

  insert(newTodo: Todo): void {
    this.todos.add(newTodo);
  }

  remove(todo: Todo): void {
    this.todos.delete(todo);
  }
}
