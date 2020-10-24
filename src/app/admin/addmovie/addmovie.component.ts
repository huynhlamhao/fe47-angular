import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from "@angular/forms"
import { MoviesService } from "src/app/core/services/movies.service"
@Component({
  selector: 'app-addmovie',
  templateUrl: './addmovie.component.html',
  styleUrls: ['./addmovie.component.scss']
})
export class AddmovieComponent implements OnInit {
  form: FormGroup
  imageReview: string | ArrayBuffer = ''
  constructor(private movieServices: MoviesService) {
    this.form = new FormGroup({
      tenPhim: new FormControl(''),
      biDanh: new FormControl(''),
      trailer: new FormControl(''),
      hinhAnh: new FormControl(''),
      moTa: new FormControl(''),
      ngayKhoiChieu: new FormControl(''),



    })
  }

  ngOnInit(): void {
  }
  handleAddMovie() {
    console.log(this.form.value);
    this.movieServices.addMovie(this.form.value).subscribe()


  }
  handleChangeFile(event) {
    console.log(event.target.value);
    console.log(event.target.files);
    const file = event.target.files[0];
    if (!file)
      return
    this.form.patchValue({ hinhAnh: event.target.files[0] })
    // Bien doi tuong file thanh base64 => co the gan vao tag img
    const fileReader = new FileReader()
    fileReader.readAsDataURL(event.target.files[0])
    fileReader.onloadend = (e) => {
      console.log(e.target.result);
      this.imageReview = e.target.result
    }


  }
}
