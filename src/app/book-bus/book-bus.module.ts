import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookBusComponent } from './book-bus.component';
import { GheComponent } from './ghe/ghe.component';
import { GheItemComponent } from './ghe-item/ghe-item.component';
import { GheDadatComponent } from './ghe-dadat/ghe-dadat.component';



@NgModule({
  declarations: [BookBusComponent, GheComponent, GheItemComponent, GheDadatComponent],
  imports: [
    CommonModule
  ],
  exports: [BookBusComponent]
})
export class BookBusModule { }
