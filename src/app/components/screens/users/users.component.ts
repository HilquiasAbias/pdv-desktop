import { Component, OnInit } from '@angular/core';
import { UsersService } from './../../../services/users.service';

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
    
    constructor(private usersService: UsersService) { }

    async ngOnInit(): Promise<void> {}
}
