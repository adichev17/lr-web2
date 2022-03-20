import { SuccessPageComponent } from './success-page/success-page.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { MainLayoutComponent } from './shared/components/main-layout/main-layout.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PostPageComponent } from './post-page/post-page.component';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: '', redirectTo: '/', pathMatch: 'full' },
      { path: '', component: HomePageComponent },
    ],
  },
  {
    path: 'admin',
    loadChildren: './admin/admin.module#AdminModule',
  },
  {
    path: 'error',
    component: ErrorPageComponent,
  },
  {
    path: 'success',
    component: SuccessPageComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
