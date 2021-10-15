import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';

import { HomeComponent } from './home/home.component';
import { NavigationComponent } from './navigation/navigation.component';
import { InfoComponent } from './info/info.component';
import { CrewmembersComponent } from './crewmembers/crewmembers.component';
import { AccountComponent } from './account/account.component';
import { ComerceComponent } from './comerce/comerce.component';
import { Error404Component } from './error404/error404.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'navigation', component: NavigationComponent},
  {path: 'info', component: InfoComponent},
  {path: 'crew', component: CrewmembersComponent},
  {path: 'account', component: AccountComponent},
  { path: 'comerce', component: ComerceComponent },
  {path: '**',pathMatch: 'full', component: Error404Component}
  
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
