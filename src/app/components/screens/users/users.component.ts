import { Component, OnInit } from '@angular/core';
import { UsersService } from './../../../services/users.service';
import { PaginationResponseModel } from 'src/app/models/pagination-response.model';
import { PaginationRequestModel } from 'src/app/models/pagination-request.model';
import { CacheService } from 'src/app/services/cache.service';

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

    loggedUser: any;

    users: PaginationResponseModel;
    filter: PaginationRequestModel;
    
    constructor(
        private usersService: UsersService,
        private cacheService: CacheService
    ) { }

    async ngOnInit(): Promise<void> {
        this.loggedUser = this.cacheService.get('user');
        this.filter = new PaginationRequestModel();
        this.filter.previous = 0;
        this.filter.next = 1;
        this.filter.pageSize = 10;
        this.filter.where = {};
        this.filter.select = {
            id: true,
            name: true,
            email: true,
            created_at: true,
            updated_at: true,
            role: {
                select: {
                    name: true,
                }
            },
        };
        this.filter.orderBy = {created_at: "desc"};
        this.users = new PaginationResponseModel();
        this.users = await this.getUsers().then(data => data);
        console.log(this.users);
    }

    private async getUsers(): Promise<PaginationResponseModel> {
        const token = this.loggedUser.accessToken;
        console.log(token);
        
        return new Promise((resolve) => {
            this.usersService.getUsers(this.filter, token).subscribe({
                next: (response: PaginationResponseModel) => {
                    resolve(response);
                },
                error: () => {
                    resolve(null);
                }
            })
        });
    }
}
