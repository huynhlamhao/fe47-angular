import { Component, OnInit, Output, EventEmitter, ViewChildren, QueryList } from '@angular/core';
import { from } from 'rxjs';
import { MovieItemComponent } from "../movie-item/movie-item.component"
@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss'],
})
export class MovieListComponent implements OnInit {
  @Output() selectMovie = new EventEmitter()
  @ViewChildren(MovieItemComponent) movieItemComponent: QueryList<MovieItemComponent>
  movieList: any[] = [
    { tenPhim: 'anvangers', gia: 80000, hinhAnh: 'assets/images/images.jpg' },
    { tenPhim: 'lionKing', gia: 80000, hinhAnh: 'assets/images/images1.jpg' },
    { tenPhim: 'noName', gia: 80000, hinhAnh: 'assets/images/images2.jpg' },
  ];

  constructor() { }

  ngOnInit(): void { }
  viewDetail(movie: any) {
    this.selectMovie.emit(movie)
    this.movieItemComponent.forEach((item: MovieItemComponent) => {
      console.log(item.movie);

    })
  }
}
