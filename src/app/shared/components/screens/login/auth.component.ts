import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { CacheService } from '../../../../services/cache.service';
import { APP_CONFIG } from '../../../../../environments/environment';
import { LoginModel } from '../../../../models/users/login.model';

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
    ) {
        this.api = APP_CONFIG.api;
        this.cacheSubscription = this.cacheService.cache$.subscribe(
            user => {
                this.user = user;
            }
        );
    }

    async ngOnInit(): Promise<void> {
        this.api = APP_CONFIG.api;
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
        this.router.navigate(['/app/dashboard']);
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
