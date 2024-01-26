import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './shared/components';

import { HomeRoutingModule } from './home/home-routing.module';
import { DetailRoutingModule } from './detail/detail-routing.module';
import { AppLayoutComponent } from './layout/app.layout.component';

const routes: Routes = [
  { 
    path: '', 
    loadChildren: () => import('./shared/components/screens/login/auth.module').then(m => m.AuthModule) 
  },
  {
    path: 'app',
    component: AppLayoutComponent,
    children: [
      { path: '', loadChildren: () => import('./shared/components/screens/screens.module').then(m => m.ScreensModule) },
      { path: 'profile', loadChildren: () => import('./shared/components/screens/profile/profile.module').then(m => m.ProfileModule) },
      { path: 'documentation', loadChildren: () => import('./shared/components/screens/documentation/documentation.module').then(m => m.DocumentationModule) },
    ]
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {}),
    HomeRoutingModule,
    DetailRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
