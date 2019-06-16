import {Injectable } from '@angular/core'
import {HttpClient, HttpParams} from '@angular/common/http'
import {HttpHeaders} from '@angular/common/http'

import {Observable, from} from 'rxjs'
import {catchError} from 'rxjs/operators'

import {Task} from './task'
import {HttpErrorHandler, HttpError} from '../http-error-handler.service'


@Injectable()

export class TaskService{
    private handleError: HttpError

    constructor(private http: HttpClient, httpErrorHandler: HttpErrorHandler){
        this.handleError = httpErrorHandler.createHandleError('TaskService')
    }

    getTasks(): Observable<Task[]> {
        return this.http
            .get<Task[]>('api/task')
            .pipe(catchError(this.handleError('getTasks', [])))
    }

    addTask(task: Task): Observable<Task> {
        return this.http
            .post<Task>('api/tasks', task)
            .pipe(catchError(this.handleError('addTask', task)))
    }
}