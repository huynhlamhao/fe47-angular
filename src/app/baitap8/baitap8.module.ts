import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Baitap8Component } from './baitap8.component';
import { DanhSachDatComponent } from './danh-sach-dat/danh-sach-dat.component';
import { GheComponent } from './ghe/ghe.component';
import { DanhSachGheComponent } from './danh-sach-ghe/danh-sach-ghe.component';

import { RouterModule, Routes } from "@angular/router"
const routes: Routes = [
  { path: "home", component: Baitap8Component }
]

@NgModule({
  declarations: [Baitap8Component, DanhSachDatComponent, GheComponent, DanhSachGheComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  // exports: [Baitap8Component]
})
export class Baitap8Module { }
