import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-todo-input-add-items',
  templateUrl: './todo-input-add-items.component.html',
  styleUrls: ['./todo-input-add-items.component.scss'],
})
export class TodoInputAddItemsComponent implements OnInit {
  @Output() public emitAddItem = new EventEmitter();

  public newTaskName: string = '';

  constructor() {}

  ngOnInit(): void {}

  public submitNewTask(): void {
    if (!this.newTaskName.trim()) return;

    this.emitAddItem.emit(this.newTaskName);
    this.newTaskName = '';
  }
}
