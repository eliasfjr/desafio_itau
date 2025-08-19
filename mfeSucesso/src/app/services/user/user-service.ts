import { Injectable } from '@angular/core';
import { userURIs } from "../user/user-config";
import { catchError, Observable, throwError } from 'rxjs';
import { User } from '../../domain/user/user.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient, private toastr: ToastrService) { }

  public getUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(userURIs.userList).pipe(
      catchError(this.handleError)
    );
  }

  public handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('Houve um erro:', error.error.message);
    } else {
      console.error(`status: ${error.status}, ` + `descrição: ${error.error}`);
    }
    return throwError(() => new Error('Algum erro aconteceu, tente novamente mais tarde!'));
  }
}
