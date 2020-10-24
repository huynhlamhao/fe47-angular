import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { Movie } from 'src/app/core/models/movies';
import { MoviesService } from "src/app/core/services/movies.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  movieList: Movie[] | null = null
  loading: boolean = false
  error: string = ""
  constructor(private moviesService: MoviesService) { }

  ngOnInit(): void {
    // Call API
    this.moviesService.getMovieList().subscribe({ next: (result) => { } })
    // subscribe data
    this.moviesService.movieList.subscribe({
      next: (result: any) => {
        this.movieList = result.data
        this.loading = result.loading
        this.error = result.error
      }
    })
    // this.loading = true
    // this.moviesService.getMovieList().subscribe({
    //   next: result => {
    //     this.movieList = result
    //     this.loading = false
    //     console.log(result);
    //   },
    //   error: error => {
    //     console.log(error);

    //     this.loading = false
    //     this.error = error.error;

    //   },
    //   complete: () => console.log('get movie list success')
    // })
  }

}
