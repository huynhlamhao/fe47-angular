import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesComponent } from './movies.component';
import { MaterialModule } from "src/app/shared/material/material.module"
import { from } from 'rxjs';


@NgModule({
  declarations: [MoviesComponent],
  imports: [
    CommonModule, MaterialModule
  ]
})
export class MoviesModule { }
