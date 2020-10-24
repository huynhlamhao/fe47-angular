import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Baitap2Component } from './baitap2.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { IndexComponent } from './index/index.component';
import { SliderComponent } from './slider/slider.component';
import { ContentComponent } from './content/content.component';
import { ItemComponent } from './item/item.component';
import { RouterModule, Routes } from "@angular/router"
const routes: Routes = [
  { path: "home", component: Baitap2Component }
]
@NgModule({
  declarations: [
    Baitap2Component,
    HeaderComponent,
    FooterComponent,
    IndexComponent,
    SliderComponent,
    ContentComponent,
    ItemComponent,
  ],
  imports: [CommonModule, RouterModule.forChild(routes)],
  // exports: [Baitap2Component],
})
export class Baitap2Module { }
