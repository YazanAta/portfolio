import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { getAnalytics, provideAnalytics } from '@angular/fire/analytics';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { BrowserModule } from '@angular/platform-browser';

import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutMeComponent } from './pages/home/sections/about-me/about-me.component';
import { CertificationsComponent } from './pages/home/sections/certifications/certifications.component';
import { ContactComponent } from './pages/home/sections/contact/contact.component';
import { HeroBannerComponent } from './pages/home/sections/hero-banner/hero-banner.component';
import { MyProjectsComponent } from './pages/home/sections/my-projects/my-projects.component';
import { TechnicalSkillsComponent } from './pages/home/sections/technical-skills/technical-skills.component';
import { WorkExperienceComponent } from './pages/home/sections/work-experience/work-experience.component';
import { HeaderComponent } from './shared/header/header.component';
import { NavbarComponent } from './shared/header/navbar/navbar.component';
import { SidebarComponent } from './shared/header/sidebar/sidebar.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        HeroBannerComponent,
        AboutMeComponent,
        WorkExperienceComponent,
        TechnicalSkillsComponent,
        MyProjectsComponent,
        ContactComponent,
        HeaderComponent,
        NavbarComponent,
        SidebarComponent,
        CertificationsComponent,
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        CommonModule,
        provideFirebaseApp(() => initializeApp(environment.firebase)),
        provideAnalytics(() => getAnalytics()),
        provideFirestore(() => getFirestore())
    ],
})
export class AppModule { }
