import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UsersModel } from '../models/users/user-filert.model';

@Injectable({
    providedIn: 'root'
})
export class UsersService {
    private api: string;

    constructor(public httpClient: HttpClient) {
        this.api = environment.api + 'users';
    }
}
