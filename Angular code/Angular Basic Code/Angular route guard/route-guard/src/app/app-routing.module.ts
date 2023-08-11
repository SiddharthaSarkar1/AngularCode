import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AuthGuard } from './auth.guard';
import { ChildGuard } from './child.guard';
import { ClientlistComponent } from './clientlist/clientlist.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { LazzyauthGuard } from './lazzyauth.guard';
import { ProfileComponent } from './profile/profile.component';
import { TeamsComponent } from './teams/teams.component';
import { UserlistComponent } from './userlist/userlist.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'about',
    canActivate: [AuthGuard],
    component: AboutComponent
  },
  {
    path: 'view',
    component: ViewComponent,
    children: [
      {
        path: "",
        canActivateChild: [ChildGuard],
        children: [
          {
            path: "user",
            component: UserlistComponent
          },
          {
            path: "client",
            component: ClientlistComponent
          }
        ]
      }
    ]
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'teams',
    component: TeamsComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: "lazzy",
    canLoad: [LazzyauthGuard],
    loadChildren: () => import("./lazzy-load/lazzy-load.module").then(m => m.LazzyLoadModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
