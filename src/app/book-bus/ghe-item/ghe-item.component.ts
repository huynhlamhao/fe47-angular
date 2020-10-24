import { Component, OnInit, Input } from '@angular/core';
import { GheComponent } from '../ghe/ghe.component';

@Component({
  selector: 'app-ghe-item',
  templateUrl: './ghe-item.component.html',
  styleUrls: ['./ghe-item.component.scss']
})
export class GheItemComponent implements OnInit {
  @Input() ghe: any;
  gheDaDat: any[] = []
  constructor() { }
  isActive: boolean = true
  ngOnInit(): void {
  }

}
