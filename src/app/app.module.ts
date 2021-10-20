import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './AppRoutingModule';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavigationComponent } from './navigation/navigation.component';
import { InfoComponent } from './info/info.component';
import { CrewmembersComponent } from './crewmembers/crewmembers.component';
import { AccountComponent } from './account/account.component';
import { ComerceComponent } from './comerce/comerce.component';
import { HeaderComponent} from './header/header.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    NavigationComponent,
    InfoComponent,
    CrewmembersComponent,
    AccountComponent,
    ComerceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
