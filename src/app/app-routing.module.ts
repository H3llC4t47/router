import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PicturesComponent } from './pictures/pictures.component';
import { BaseComponent } from './base/base.component';

const routes: Routes = [
{path: 'home', component: HomeComponent },
{path: 'about', component: AboutComponent},
{path: 'pictures', component: PicturesComponent},
{path: 'base', component: BaseComponent},
{path: '', redirectTo: '/base', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
