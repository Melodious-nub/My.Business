import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './pages/landing/landing.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  { path:'', component: LandingComponent},

  // for blank url
  { path: '', redirectTo: '/landing', pathMatch: 'full'},

  // lazzy loading route for admin module
  { path: 'admin',
    canActivate: [AuthGuard],
    loadChildren: () =>
    import('./admin/admin.module').then(m => m.AdminModule)
  },

  // wildCard for notfound
  { path: '**', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
