import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss'],
})
export class DemoComponent implements OnInit {
  message: string = 'hello !';
  disabled: boolean = true;
  userName: string = 'hau';
  email: string = '';
  address: string = '';
  fullName: string = '';
  constructor() {}

  ngOnInit(): void {}
  changeMessage(message: string): void {
    this.message = message;
  }
  changeUserName(element: any): void {
    console.log(element);
    this.userName = element.value;
  }
  changeEmail(evt: any): void {
    this.email = evt.target.value;
  }
}
