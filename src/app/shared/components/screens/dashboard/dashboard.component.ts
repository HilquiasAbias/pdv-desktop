import { Component, OnInit, OnDestroy } from '@angular/core';
import { CacheService } from '../../../../services/cache.service';
import { Subscription } from 'rxjs';

@Component({
    templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit, OnDestroy {

    user: any;
    titlecase: string = 'Dashboard';
    private cacheSubscription: Subscription;

    constructor(private cacheService: CacheService) {
        this.cacheSubscription = this.cacheService.cache$.subscribe(
            user => {
                this.user = JSON.parse(JSON.stringify(user));
            }
        );
    }

    async ngOnInit(): Promise<void> {
        console.log(this.user);
    }

    ngOnDestroy() {}
}
