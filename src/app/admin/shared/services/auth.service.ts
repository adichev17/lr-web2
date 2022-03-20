import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../../../shared/interfaces';
import { Observable } from 'rxjs';
import { map, tap, switchMap } from 'rxjs/operators';

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) {}

  login(user: User): Observable<any> {
    return this.http
      .post('https://helloworldprojectt.herokuapp.com/v1/authorization', user, {
        observe: 'response',
      })
      .pipe(map((res) => res.status));
  }

  logout() {}
}
