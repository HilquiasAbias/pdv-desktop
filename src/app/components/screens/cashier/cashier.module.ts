import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CashierComponent } from './cashier.component';
import { CachierRoutingModule } from './cashier-routing.module';

@NgModule({
    imports: [
        CommonModule,
        CachierRoutingModule
    ],
    declarations: [CashierComponent]
})
export class CashierModule { }
