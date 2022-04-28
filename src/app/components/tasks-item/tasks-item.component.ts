import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import Task from '../../Task';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-tasks-item',
  templateUrl: './tasks-item.component.html',
  styleUrls: ['./tasks-item.component.css']
})
export class TasksItemComponent implements OnInit {

 @Input() task !: Task
 @Output() onDeleteTask : EventEmitter<Task> = new EventEmitter();

 faTrash = faTrash;
  constructor() { }

  ngOnInit(): void {
  }
   
  onDelete(task: any){
    this.onDeleteTask.emit(task);
  }
}
