import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from '../service/app.layout.service';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html',
    styleUrls: ['./app.menu.component.scss']
})
export class AppMenuComponent implements OnInit {

    model: any[] = [];

    constructor(public layoutService: LayoutService) { }

    ngOnInit() {
        this.model = [
            {
                label: 'Inicio',
                items: [
                    { label: 'Dashboard', icon: 'pi pi-fw pi-chart-bar', routerLink: ['/'] }
                ]
            },
            {
                label: 'Sistema',
                icon: 'pi pi-fw pi-briefcase',
                items: [
                    {
                        label: 'Usuários',
                        icon: 'pi pi-fw pi-users',
                        routerLink: ['/app/pdv/users']
                    },
                    {
                        label: 'Estoque',
                        icon: 'pi pi-fw pi-box',
                        routerLink: ['/app/pdv/store']
                    },
                    {
                        label: 'Caixa',
                        icon: 'pi pi-fw pi-dollar',
                        routerLink: ['/app/pdv/cashier']
                    },
                    {
                        label: 'Fornecedores',
                        icon: 'pi pi-fw pi-truck',
                        routerLink: ['/app/pdv/suppliers']
                    },
                    {
                        label: 'Login',
                        icon: 'pi pi-fw pi-sign-in',
                        routerLink: ['/app/pdv/login']
                    }
                ]
            },
        ];
    }
}
