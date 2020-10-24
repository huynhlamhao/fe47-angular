import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InteractionComponent } from './interaction.component';
import { MovieItemComponent } from './movie-item/movie-item.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { AddMovieComponent } from './add-movie/add-movie.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';

@NgModule({
  declarations: [InteractionComponent, MovieItemComponent, MovieListComponent, AddMovieComponent, MovieDetailComponent],
  imports: [CommonModule],
  exports: [InteractionComponent],
})
export class InteractionModule {}
