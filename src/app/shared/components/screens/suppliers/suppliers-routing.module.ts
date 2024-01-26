import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SuppliersComponent } from './suppliers.component';

@NgModule({
	imports: [RouterModule.forChild([
		{ path: '', component: SuppliersComponent }
	])],
	exports: [RouterModule]
})
export class SupliersRoutingModule {
}
