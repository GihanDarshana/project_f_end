import {Component, OnInit} from '@angular/core'
import {Task} from './task'
import {TaskService} from './task.service'

@Component({
    selector: 'app-tasks',
    templateUrl: './task.component.html',
    providers: [TaskService]
})

export class TasksComponent implements OnInit{
    tasks : Task[]
    editTask: Task

    constructor(private taskService: TaskService){

    }

    ngOnInit(){
         this.getTasks()
    }

    getTasks():void{
        this.taskService.getTasks().subscribe(tasks => (this.tasks = tasks))
    }

    add (title: string):void{
        this.editTask =  undefined
        title = title.trim()
        if(!title){
            return
        }

    const newTask: Task = { title } as Task

    this.taskService.addTask(newTask).subscribe(task => this.tasks.push(task))

    }
}
