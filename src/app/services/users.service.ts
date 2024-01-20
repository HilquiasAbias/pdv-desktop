import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginModel, } from '../models/users/login.model';
import { PaginationRequestModel } from '../models/pagination-request.model';
@Injectable({
    providedIn: 'root'
})
export class UsersService {
    private api: string;

    constructor(
        public httpClient: HttpClient,
    ) {
        this.api = environment.api;
    }

    public login(login: LoginModel): Observable<any> {
        return this.httpClient.post(this.api + '/login', login);
    }

    public getUsers(body: PaginationRequestModel, token: string): Observable<any> {
        return this.httpClient.post(this.api + '/users/paginate', body, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
    }
}
