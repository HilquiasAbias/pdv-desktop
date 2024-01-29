import { Component, OnInit } from '@angular/core';
import { CreateUserModel } from '../../../../models/users/create-user.model';
import { PaginationResponseModel } from '../../../../models/pagination-response.model';
import { PaginationRequestModel } from '../../../../models/pagination-request.model';
import { UsersService } from '../../../../services/users.service';
import { CacheService } from '../../../../services/cache.service';
import { MessageService } from 'primeng/api';
import { MessageModel } from '../../../../models/message.model';


@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

    loggedUser: any;
    roles: any;
    selectedRole: any;
    searchName: string | null = null;
    onSearch: boolean = false;

    createUserModel: CreateUserModel = new CreateUserModel();
    createUserPassword: any;
    createUserDialog: boolean = false;
    createUserRole: string | null = null;
    submitted: boolean = false;

    createUserSelectedRole: any;

    users: PaginationResponseModel | null = null;
    filter: PaginationRequestModel | null = null;
    
    constructor(
        private usersService: UsersService,
        private cacheService: CacheService,
        private messageService: MessageService
    ) { }

    async ngOnInit(): Promise<void> {
        this.loggedUser = this.cacheService.get('user');

        if (!this.onSearch) {
            this.filterDefault();
            this.users = new PaginationResponseModel();
            this.users = await this.getUsers().then(data => data);
        }
        
        this.roles = [
            { label: 'Administrador', value: 'admin' },
            { label: 'Funcionário', value: 'employee' },
            { label: 'Gerente', value: 'manager' },
        ];

        this.onSearch = false;
    }

    public restart() {
        this.ngOnInit();
    }

    private filterDefault(): void {
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
    }

    async onPageChange(event: any) {
        this.filter!.pageSize = event.rows;
        this.filter!.previous = event.page;
        this.users = await this.getUsers();
    }

    private handleRolesFilter(): void {
        if (this.selectedRole) {
            this.filter!.where.role = {name: this.selectedRole.value};
        }
    }

    private handleNameFilter(): void {
        if (this.searchName) {
            this.filter!.where.name = {contains: this.searchName};
        }
    }


    async searchUser() {
        this.filterDefault();
        this.handleRolesFilter();
        this.handleNameFilter();
        this.users = await this.getUsers();
        this.onSearch = true;
        this.restart();
    }

    async createUser() {
        this.submitted = true;
        this.addMessage({ msg: 'Processando criação de usuário...', severity: 'info' });
        const response = await this.createNewUser().then(data => data);
        if (response.success) {
            this.addMessage({ msg: 'Usuário criado com sucesso', severity: 'success' });
            this.hideCreateUserDialog();
            this.restart();
        } else {
            this.addMessage({ 
                msg: 'Erro ao criar usuário, tente novamente em alguns instantes.', 
                severity: 'error',
                time: 5000
            })
        }
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
        if (this.createUserModel.password === this.createUserPassword) {
            return true;
        }
        return false;
    }

    private addMessage(messageModel: MessageModel): void {
        this.messageService.add({ 
            severity: messageModel.severity, 
            summary: messageModel.severity, 
            detail: messageModel.msg, 
            life: messageModel.time ? messageModel.time : 3000
        });
    }

    private async createNewUser(): Promise<any> {
        const token = this.loggedUser.accessToken;
        return new Promise((resolve) => {
            this.usersService.createUser(this.createUserModel, token).subscribe({
                next: (response: any) => {
                    resolve(response);
                },
                error: (err) => {
                    resolve(null!);
                }
            })
        });
    }

    private async getUsers(): Promise<PaginationResponseModel> {
        const token = this.loggedUser.accessToken;
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
