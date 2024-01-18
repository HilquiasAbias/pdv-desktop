import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CashierComponent } from './cashier.component';

@NgModule({
	imports: [RouterModule.forChild([
		{ path: '', component: CashierComponent }
	])],
	exports: [RouterModule]
})
export class CachierRoutingModule {
}
