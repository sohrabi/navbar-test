import { Routes } from '@angular/router';
import { ContentHomeComponent } from './content-home/content-home.component';
import { ContentAboutComponent } from './content-about/content-about.component';
import { ContentContactComponent } from './content-contact/content-contact.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: ContentHomeComponent },
    { path: 'about', component: ContentAboutComponent },
    { path: 'contact', component: ContentContactComponent },
];
