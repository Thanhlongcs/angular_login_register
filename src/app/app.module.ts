import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatRadioModule} from '@angular/material/radio';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatCardModule} from '@angular/material/card';

import {HomeComponent} from './pages/home/home.component';
import {GettingStartedComponent} from './pages/gettingstarted/gettingstarted.component';

import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {NgxAudioPlayerModule} from 'projects/ngx-audio-player/src/public_api';
import {MatButtonModule} from '@angular/material/button';

import {NavBarModule} from './shared/navbar';
import {FooterModule} from './shared/footer';
import {RegisterComponent} from './form-login/register/register.component';
import {MatInputModule} from '@angular/material/input';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { LoginComponent } from './form-login/login/login/login.component';
import { ProfileComponent } from './form-login/profile/profile/profile.component';
import { ParentInputComponent } from './input/parent-input/parent-input.component';
import { ChildInputComponent } from './input/child-input/child-input.component';
import { OutputChildComponent } from './output/output-child/output-child.component';
import { ParentOutputComponent } from './output/parent-output/parent-output.component';
import {AngularFireStorageModule} from '@angular/fire/storage';
import {environment} from '../environments/environment.prod';
import { UploadAvatarComponent } from './upload/upload-avatar/upload-avatar.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
// @ts-ignore
import {AngularFireModule} from '@angular/fire';
import { MultipleAvatarComponent } from './upload/multiple-avatar/multiple-avatar.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {AuthInterceptor} from './service/auth.interceptor';
import { UpdateAvatarComponent } from './form-login/profile/update-avatar/update-avatar.component';
import * as path from 'path';
import {MatDialogModule} from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog/dialog.component';



export const appRoutes: Routes = [
  {path: '', component: HomeComponent, data: {title: 'Home'}},
  {
    path: 'guide/getting-started',
    component: GettingStartedComponent,
    data: {title: 'Getting Started'}
  },
  {path: 'home', component: HomeComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'profile', component: ProfileComponent,
  children:[
    {path:'update/avatar', component:UpdateAvatarComponent}
  ]}
];

@NgModule({
  declarations: [AppComponent, HomeComponent, GettingStartedComponent, RegisterComponent, LoginComponent, ProfileComponent, ParentInputComponent, ChildInputComponent, OutputChildComponent, ParentOutputComponent, UploadAvatarComponent, MultipleAvatarComponent, UpdateAvatarComponent, DialogComponent],
  imports: [
    HttpClientModule,
    BrowserModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatInputModule,
    MatRadioModule,
    MatCheckboxModule,
    MatSlideToggleModule,
    MatButtonModule,
    BrowserAnimationsModule,
    NavBarModule, FooterModule,
    NgxAudioPlayerModule,
    AngularFireStorageModule,
    MatDialogModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    RouterModule.forRoot(appRoutes, {useHash: false}), FormsModule, ReactiveFormsModule, MatProgressSpinnerModule, MatProgressBarModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS,useClass:AuthInterceptor, multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
