import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {RegistrationComponent} from './registration/registration.component';
import {LoginComponent} from './login/login.component';
import {MyfeedComponent} from './myfeed/myfeed.component';
import {SportsComponent} from './sports/sports.component';
import {EntertainmentComponent} from './entertainment/entertainment.component';
import {AdminComponent} from './admin/admin.component';
import {AdminLoginComponent} from './admin-login/admin-login.component';
import {ScienceComponent} from './science/science.component';
import {UserManagementComponent} from './user-management/user-management.component';
import {ReaderProfileComponent} from './reader-profile/reader-profile.component';
import {NewsagencyLoginComponent} from './newsagency-login/newsagency-login.component';
import {AdminNewsManagerComponent} from './admin-news-manager/admin-news-manager.component';
import {CreateNewsComponent} from './create-news/create-news.component';
import {UpdateNewsComponent} from './update-news/update-news.component';
import {FullStoryComponent} from './full-story/full-story.component';
import {ContactUsComponent} from './contact-us/contact-us.component';
import {AdvertiserLoginComponent} from './advertiser-login/advertiser-login.component';
import {CreateAdvertComponent} from './create-advert/create-advert.component';
import {UpdateAdvertComponent} from './update-advert/update-advert.component';
import {AgencyComponent} from './agency/agency.component';
import {AgencyPanelComponent} from './agency-panel/agency-panel.component';
import {AdvertiserPanelComponent} from './advertiser-panel/advertiser-panel.component';


const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'agency/panel', component: AgencyPanelComponent},
    {path: 'advertiser/panel', component: AdvertiserPanelComponent},

    {path: 'register', component: RegistrationComponent},
    {path: 'login', component: LoginComponent},
    {path: 'agency', component: AgencyComponent},
    {path: 'user/myfeed', component: MyfeedComponent},
    {path: 'advertiser/create', component: CreateAdvertComponent},
    {path: 'advert/update', component: UpdateAdvertComponent},
    {path: 'sports', component: SportsComponent},
    {path: 'science', component: ScienceComponent},
    {path: 'advertiser/login', component: AdvertiserLoginComponent},
    {path: 'user/profile', component: ReaderProfileComponent},
    {path: 'agency/login', component: NewsagencyLoginComponent},
    {path: 'admin/newsManagement', component: AdminNewsManagerComponent},
    {path: 'admin/createNews', component: CreateNewsComponent},
    {path: 'admin/updateNews', component: UpdateNewsComponent},
    {path: 'news/fullStory', component: FullStoryComponent},
    {path: 'contactUs', component: ContactUsComponent},
    {path: 'entertainment', component: EntertainmentComponent},
    {path: 'admin', component: AdminComponent},
    {path: 'admin/login', component: AdminLoginComponent},
    {path: 'admin/userManagement', component: UserManagementComponent},
    {path: '**', component: HomeComponent},
    {path: 'register', component: RegistrationComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
