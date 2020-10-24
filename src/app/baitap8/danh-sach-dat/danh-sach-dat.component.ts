import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-danh-sach-dat',
  templateUrl: './danh-sach-dat.component.html',
  styleUrls: ['./danh-sach-dat.component.scss']
})
export class DanhSachDatComponent implements OnInit {
  @Output() onRemove = new EventEmitter()
  mangGheDaDat: any[] = []
  constructor() { }

  ngOnInit(): void {
  }
  xuLyDatGhe(ghe: any) {
    if (ghe.dangDat === true) {
      this.mangGheDaDat.push(ghe)
    }
    else {
      const index = this.mangGheDaDat.findIndex((item) => item.SoGhe === ghe.SoGhe)
      if (index !== -1) { this.mangGheDaDat.splice(index, 1) }
    }
  }
  huyGhe(SoGhe: number) {
    // b1:xử lý xóa ghế ra khỏi mangGheDangDat
    this.mangGheDaDat = this.mangGheDaDat.filter(item => item.SoGhe !== SoGhe)
    // const index = this.mangGheDaDat.findIndex((item) => item.SoGhe === SoGhe)
    // if (index !== -1) { this.mangGheDaDat.splice(index, 1) }
    // b2:output so ghế ra thằng cha
    this.onRemove.emit(SoGhe)
  }
}
