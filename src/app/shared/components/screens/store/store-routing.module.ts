import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StoreComponent } from './store.component';

@NgModule({
	imports: [RouterModule.forChild([
		{ path: '', component: StoreComponent }
	])],
	exports: [RouterModule]
})
export class StoreRoutingModule {
}
