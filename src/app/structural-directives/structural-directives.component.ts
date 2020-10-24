import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structural-directives',
  templateUrl: './structural-directives.component.html',
  styleUrls: ['./structural-directives.component.scss'],
})
export class StructuralDirectivesComponent implements OnInit {
  isShowing: boolean = true;
  isLoggedIn: boolean = false;
  color: string = '';
  dssv: any = [
    {
      hoTen: 'Hào',
      lop: 'fe47',
    },
    {
      hoTen: 'Hào1',
      lop: 'fe48',
    },
    {
      hoTen: 'Hào2',
      lop: 'fe49',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
