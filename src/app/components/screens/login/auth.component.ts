import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { LoginModel } from 'src/app/models/users/login.model';
import { UsersService } from 'src/app/services/users.service';
import { environment } from 'src/environments/environment';
import { CacheService } from '../../../services/cache.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

    private api: string;
    name: string = '';
    password: string = '';

    user: any;
    private cacheSubscription: Subscription;
    
    constructor(
        private cacheService: CacheService, 
        public httpClient: HttpClient,
        private router: Router
    ) {}

    async ngOnInit(): Promise<void> {
        this.api = environment.api;
        this.cacheSubscription = this.cacheService.cache$.subscribe(
            user => {
                this.user = user;
            }
        );
    }

    public async authenticate(): Promise<void> {
        const response = await this.login();
        if (response) {
            this.cacheService.set('user', response);
            this.navigateToDashboard();
        } else {
            console.log('Usuário ou senha inválidos!');
        }
    }

    private navigateToDashboard(): void {
        this.router.navigate(['/pdv/app/dashboard']);
    }

    private async login(): Promise<any> {
        const login: LoginModel = {
            name: this.name,
            password: this.password
        }
        return new Promise((resolve, reject) => {
            this.httpClient.post(this.api + '/auth', login).subscribe({
                next: (response: any) => {
                  resolve(response);
                },
                error: () => {
                  resolve(null);
                }
              })
        });
    }    

    private async logout(): Promise<void> {
        this.cacheService.clear('user');
    }
}
