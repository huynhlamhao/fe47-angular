import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-baitap6',
  templateUrl: './baitap6.component.html',
  styleUrls: ['./baitap6.component.scss'],
})
export class Baitap6Component implements OnInit {
  dssp: any[] = [];

  constructor() {}

  ngOnInit(): void {}
  themSanPham(maSp: string, tenSp: string, giaSp: number) {
    this.dssp.push({ maSp, tenSp, giaSp });
    console.log(this.dssp);
  }
}
