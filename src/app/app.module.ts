import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavigationComponent } from './navigation/navigation.component';
import { InfoComponent } from './info/info.component';
import { CrewmembersComponent } from './crewmembers/crewmembers.component';
import { AccountComponent } from './account/account.component';
import { ComerceComponent } from './comerce/comerce.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavigationComponent,
    InfoComponent,
    CrewmembersComponent,
    AccountComponent,
    ComerceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
