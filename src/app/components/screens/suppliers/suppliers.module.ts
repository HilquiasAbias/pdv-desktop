import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuppliersComponent } from './suppliers.component';
import { SupliersRoutingModule } from './suppliers-routing.module';

@NgModule({
    imports: [
        CommonModule,
        SupliersRoutingModule
    ],
    declarations: [SuppliersComponent]
})
export class SuppliersModule { }
