import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";
import { LayoutComponent } from './layout/layout.component';
import { MoviesComponent } from './movies/movies.component';
import { UserComponent } from './user/user.component';
import { MaterialModule } from "src/app/shared/material/material.module"
import { ReactiveFormsModule } from "@angular/forms"
import { from } from 'rxjs';

import { AddmovieComponent } from './addmovie/addmovie.component'
const routes: Routes = [
  {
    path: '', component: LayoutComponent, children: [
      { path: '', component: MoviesComponent },
      { path: 'user', component: UserComponent },
      { path: 'movie', component: MoviesComponent },
      { path: 'addmovie', component: AddmovieComponent },



    ]
  }
]


@NgModule({
  declarations: [LayoutComponent, MoviesComponent, UserComponent, AddmovieComponent],
  imports: [
    CommonModule, RouterModule.forChild(routes), MaterialModule, ReactiveFormsModule
  ]
})
export class AdminModule { }
