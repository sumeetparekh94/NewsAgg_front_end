import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {
    MatSidenavModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
    MatCardModule, MatGridListModule, MatMenuModule,
    MatCheckboxModule, MatDialogModule, MatDialogRef, MatDialog
} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { LayoutModule } from '@angular/cdk/layout';
import { RegistrationComponent } from './registration/registration.component';
import { HomeComponent } from './home/home.component';
import { NewsCardComponent } from './news-card/news-card.component';
import {NewsService} from './services/news.service';
import { SidebarComponent } from './sidebar/sidebar.component';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import {LoginService} from './services/login.service';
import { MyfeedComponent } from './myfeed/myfeed.component';
import {MyfeedService} from './services/myfeed.service';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { SportsComponent } from './sports/sports.component';
import {SportsService} from './services/sports.service';
import { EntertainmentComponent } from './entertainment/entertainment.component';
import { AdminComponent } from './admin/admin.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { ScienceComponent } from './science/science.component';
import { AdminSidebarComponent } from './admin-sidebar/admin-sidebar.component';
import { UserManagementComponent } from './user-management/user-management.component';
import {AdminService} from './services/admin.service';
import {RegisterService} from './services/register.service';
import { ReaderProfileComponent } from './reader-profile/reader-profile.component';
import {UserService} from './services/user.service';
import { NewsagencyLoginComponent } from './newsagency-login/newsagency-login.component';
import { AdminNewsManagerComponent } from './admin-news-manager/admin-news-manager.component';
import { CreateNewsComponent } from './create-news/create-news.component';
import { UpdateNewsComponent } from './update-news/update-news.component';
import { FullStoryComponent } from './full-story/full-story.component';
import { AgencyComponent } from './agency/agency.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AdvertiserLoginComponent } from './advertiser-login/advertiser-login.component';
import { CreateAdvertComponent } from './create-advert/create-advert.component';
import {AdvertService} from './services/advert.service';
import { AdvertCardComponent } from './advert-card/advert-card.component';
import { UpdateAdvertComponent } from './update-advert/update-advert.component';
import { AdvertiserPanelComponent } from './advertiser-panel/advertiser-panel.component';
import { AgencyPanelComponent } from './agency-panel/agency-panel.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    RegistrationComponent,
    HomeComponent,
    NewsCardComponent,
    SidebarComponent,
    MyfeedComponent,
    ContactComponent,
    AboutComponent,
    SportsComponent,
    EntertainmentComponent,
    AdminComponent,
    AdminLoginComponent,
    ScienceComponent,
    AdminSidebarComponent,
    UserManagementComponent,
    ReaderProfileComponent,
    NewsagencyLoginComponent,
    AdminNewsManagerComponent,
    CreateNewsComponent,
    UpdateNewsComponent,
    FullStoryComponent,
    AgencyComponent,
    ContactUsComponent,
    AdvertiserLoginComponent,
    CreateAdvertComponent,
    AdvertCardComponent,
    UpdateAdvertComponent,
    AdvertiserPanelComponent,
    AgencyPanelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
    MatCardModule,
    MatGridListModule,
    MatMenuModule,
    MatCheckboxModule,
       MatDialogModule,
      FormsModule,
      ReactiveFormsModule

  ],
  providers: [NewsService, LoginService, MyfeedService, SportsService, AdminService, RegisterService, UserService, AdvertService],
  bootstrap: [AppComponent]
})
export class AppModule { }
