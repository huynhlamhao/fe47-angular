import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { NewsComponent } from './news/news.component';
import { RouterModule, Routes } from "@angular/router";
import { LayoutComponent } from './layout/layout.component'
import { MaterialModule } from "src/app/shared/material/material.module"
import { PipeModule } from "src/app/shared/pipe/pipe.module"
import { from } from 'rxjs';
const routes: Routes = [
  {
    path: '', component: LayoutComponent, children: [
      // khi xài children thì file html phải có router-outlet
      { path: '', component: HomeComponent },
      { path: 'movie/:id', component: MovieDetailComponent },
      { path: 'news', component: NewsComponent },
    ]
  },
]

@NgModule({
  declarations: [HomeComponent, MovieDetailComponent, NewsComponent, LayoutComponent],
  imports: [
    CommonModule, RouterModule.forChild(routes), MaterialModule, PipeModule
  ]
})
export class MainModule { }
