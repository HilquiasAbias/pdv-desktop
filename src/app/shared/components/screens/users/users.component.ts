import { Component, OnInit } from '@angular/core';
import { CreateUserModel } from '../../../../models/users/create-user.model';
import { PaginationResponseModel } from '../../../../models/pagination-response.model';
import { PaginationRequestModel } from '../../../../models/pagination-request.model';
import { UsersService } from '../../../../services/users.service';
import { CacheService } from '../../../../services/cache.service';


@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

    loggedUser: any;
    roles: any;
    selectedRoles: any;
    searchName: string | null = null;

    createUserModel: CreateUserModel | null = null;
    createUserPassword: string | null = null;
    createUserDialog: boolean = false;
    createUserRole: string | null = null;
    submitted: boolean = false;

    createUserSelectedRole: any;

    users: PaginationResponseModel | null = null;
    filter: PaginationRequestModel | null = null;
    
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
        
        this.createUserModel = new CreateUserModel();
        this.roles = [
            { label: 'Administrador', value: 'admin' },
            { label: 'Funcionário', value: 'employee' },
            { label: 'Gerente', value: 'manager' },
        ];
    }

    async onPageChange(event: any) {
        this.filter!.pageSize = event.rows;
        this.filter!.previous = event.page;
        this.users = await this.getUsers();
    }

    searchUser() {
        console.log(this.searchName);
    }

    createUser() {
        console.log('create user');
    }

    showCreateUserDialog() {
        this.createUserDialog = true;
    }

    hideCreateUserDialog() {
        this.createUserDialog = false;
        this.submitted = false;
    }

    requiredFieldArray(field: any[]): boolean {
        if (this.submitted && (!field || field.length === 0)) {
            return true;
        }

        return false;
    }

    requiredField(field: any): boolean {
        if (this.submitted && !field) {
            return true;
        }

        return false;
    }

    get validatePassword(): boolean {
        if (this.createUserModel!.password === this.createUserPassword) {
            return true;
        }

        return false;
    }

    private async getUsers(): Promise<PaginationResponseModel> {
        const token = this.loggedUser.accessToken;
        console.log(token);
        
        return new Promise((resolve) => {
            this.usersService.getUsers(this.filter!, token).subscribe({
                next: (response: PaginationResponseModel) => {
                    resolve(response);
                },
                error: () => {
                    resolve(null!);
                }
            })
        });
    }
}
