import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthenticationService } from "src/app/core/services/authentication.service"
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  @ViewChild('signupForm') signupForm: NgForm
  constructor(private auth: AuthenticationService) { }

  ngOnInit(): void {
  }
  xuLyDangKy(signupForm: NgForm) {
    // kiểm tra form có hợp lệ ko

    if (signupForm.invalid) return
    // call api đăng kí
    console.log(signupForm.value);
    this.auth.dangKy(signupForm.value).subscribe({
      next: (result) => {
        console.log(result);

      },
      error: (err) => {
        console.log(err.error);

      },
      complete: () => {
        console.log("Đăng ký thành công");

      }
    })

  }
  checkDirtyForm() {
    return this.signupForm.dirty
  }
}
