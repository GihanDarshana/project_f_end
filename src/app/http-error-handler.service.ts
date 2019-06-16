import { Injectable } from '@angular/core';
import { HttpErrorResponse } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { MessageService } from "./message.service";
//import { type } from 'os';
//import { error } from 'protractor';


export type HttpError = <T>(
     operation?: string,
     result?: T
) => (error: HttpErrorResponse) => Observable<T>


@Injectable()
export class HttpErrorHandler{

constructor(private MessageService: MessageService){ }

createHandleError = (serviceName = "") => <T> (
    operation = "operation",
    result = {} as T

) => this.HandleError(serviceName, operation, result)

HandleError<T>(serviceName="", operation="operation", result={} as T){
    return (error: HttpErrorResponse): Observable<T> => {

        console.error(error)

        const message =
           error.error instanceof ErrorEvent
            ? error.error.message
            : `server returned code ${error.status} with body "${error.error}"`

            this.MessageService.add(
                `${serviceName}: ${operation} failed: ${message}`
            )

            return of(result)

    }
}




}