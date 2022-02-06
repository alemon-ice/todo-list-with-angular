import { Component, DoCheck } from '@angular/core';
import { Task } from '../../model/task';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements DoCheck {
  public taskList: Task[] = [];

  constructor() {}

  ngDoCheck(): void {
    this.taskList.sort(
      (first, last) => Number(first.checked) - Number(last.checked)
    );
  }

  public getEmitNewTask(newTaskName: string): void {
    this.taskList.push({ name: newTaskName, checked: false });
  }

  public deleteTask(item: number): void {
    this.taskList.splice(item, 1);
  }

  public deleteAllTasks(): void {
    const confirm = window.confirm('Deseja deletar todos os itens?');

    if (confirm) {
      this.taskList = [];
    }
  }

  public validationInputChange(taskName: string, index: number): void {
    if (!taskName.length) {
      const confirm = window.confirm(
        'O nome da task está vazio, dejesa excluir?'
      );

      if (confirm) {
        this.deleteTask(index);
      }
    }
  }
}
