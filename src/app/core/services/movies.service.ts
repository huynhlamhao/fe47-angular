import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'
import { Observable, BehaviorSubject, throwError } from 'rxjs'
import { tap, catchError } from "rxjs/operators"
import { Movie } from "../models/movies";

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  private movieSubject = new BehaviorSubject({ data: [], loading: false, error: '' })
  movieList = this.movieSubject.asObservable()
  constructor(private http: HttpClient) { }
  // initMovieList() {
  //   const listFilm = localStorage.getItem('listFilm')
  //   if (listFilm) {
  //     this.movieSubject.next(JSON.parse(listFilm))
  //   }
  // }
  getMovieList(): Observable<Movie[]> {
    const url = "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01"
    const state = this.movieSubject.value
    this.movieSubject.next({ ...state, loading: true, error: '' })

    return this.http.get<Movie[]>(url).pipe(tap((result) => {
      this.movieSubject.next({ ...state, data: result, loading: false, error: '' })
    }), catchError((err) => {
      this.movieSubject.next({ ...state, loading: false, error: err.error })
      return throwError(err)
    }
    ))
  }
  getMovieDetail(id: number): Observable<any> {
    // const url = `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayThongTinPhim?maPhim=${id}`
    const url = `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayThongTinPhim?`
    let params = new HttpParams()
    params = params.append('maPhim', id.toString())
    return this.http.get<any>(url, { params })
  }
  getMovieListPaging(currentPage: number, pageSize: number) {
    const url = "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhimPhanTrang"
    // https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhimPhanTrang?maNhom=GP01&soTrang=1&soPhanTuTrenTrang=10
    let params = new HttpParams()
    params = params.append('soTrang', currentPage.toString())
      .append('soPhanTuTrenTrang', pageSize.toString())
    return this.http.get(url, { params })
  }
  addMovie(values: any) {
    const url = 'https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/ThemPhimUploadHinh'
    const formData = new FormData()
    for (let key in values) {
      formData.append(key, values[key])
    }
    formData.append('maNhom', 'GP01')
    return this.http.post(url, formData)
  }
}
