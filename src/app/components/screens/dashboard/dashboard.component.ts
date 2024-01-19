import { Component, OnInit, OnDestroy } from '@angular/core';
import { CacheService } from './../../../services/cache.service';
import { Subscription } from 'rxjs';

@Component({
    templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit, OnDestroy {

    user: any;
    titlecase: string = 'Dashboard';
    private cacheSubscription: Subscription;

    constructor(private cacheService: CacheService) {}

    async ngOnInit(): Promise<void> {
        this.cacheSubscription = this.cacheService.cache$.subscribe(
            user => {
                this.user = user;
            }
        );
    }

    ngOnDestroy() {}
}
