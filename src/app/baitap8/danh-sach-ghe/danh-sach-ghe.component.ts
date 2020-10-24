import { Component, OnInit, Output, EventEmitter, ViewChildren, QueryList } from '@angular/core';
import { from } from 'rxjs';
import { Ghe } from 'src/app/core/models/ghe';
import { GheService } from "../../core/services/ghe.service"
import { GheComponent } from "../ghe/ghe.component"
@Component({
  selector: 'app-danh-sach-ghe',
  templateUrl: './danh-sach-ghe.component.html',
  styleUrls: ['./danh-sach-ghe.component.scss']
})
export class DanhSachGheComponent implements OnInit {

  mangGhe: Ghe[]
  @Output() onSelect = new EventEmitter()
  @ViewChildren(GheComponent) gheComponents: QueryList<GheComponent>
  constructor(private gheService: GheService) { }

  //tương đương với componentDidmount bên react
  ngOnInit(): void {
    this.mangGhe = this.gheService.layDanhSachGhe()
  }
  xuLyDatGhe(ghe: any) {
    this.onSelect.emit(ghe)
  }
  xuLyHuyGhe(SoGhe: number) {
    console.log("SoGhế từ baitap8");

    this.gheComponents.forEach((item: GheComponent) => {
      if (item.ghe.SoGhe === SoGhe) {
        item.dangDat = false
      }
    })
  }
}
