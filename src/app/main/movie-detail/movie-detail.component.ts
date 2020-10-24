import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { ActivatedRoute } from "@angular/router"
import { MoviesService } from "src/app/core/services/movies.service"
@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {
  movieDetail: any[] | null = null
  loading: boolean = false
  error: string = ""
  constructor(private activatedRoute: ActivatedRoute
    , private movieService: MoviesService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe({
      next: params => {
        console.log(params.id);
        this.loading = true
        this.movieService.getMovieDetail(params.id).subscribe({
          next: result => {
            this.movieDetail = result
            this.loading = false
            console.log(this.movieDetail);

          },
          error: error => {
            this.loading = false;
            this.error = error.error;
          }
        })
      }
    })
  }

}
