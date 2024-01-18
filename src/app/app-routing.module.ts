import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { NotfoundComponent } from './components/screens/notfound/notfound.component';
import { AppLayoutComponent } from "./layout/app.layout.component";

@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: '', component: AppLayoutComponent,
                children: [
                    { path: '', loadChildren: () => import('./components/screens/dashboard/dashboard.module').then(m => m.DashboardModule) },
                    { path: 'app', loadChildren: () => import('./components/screens/screens.module').then(m => m.ScreensModule) },
                    { path: 'documentation', loadChildren: () => import('./components/screens/documentation/documentation.module').then(m => m.DocumentationModule) },
                ]
            },
            { path: 'auth', loadChildren: () => import('./components/screens/auth/auth.module').then(m => m.AuthModule) },
            { path: 'notfound', component: NotfoundComponent },
            { path: '**', redirectTo: '/notfound' },
        ], { scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled', onSameUrlNavigation: 'reload' })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
