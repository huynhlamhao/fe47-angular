import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms"
import { AuthenticationService } from "src/app/core/services/authentication.service"
import { Router } from "@angular/router"
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  signinForm: FormGroup
  constructor(private auth: AuthenticationService, private router: Router) {
    this.signinForm = new FormGroup({
      taiKhoan: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(20)

      ]),
      matKhau: new FormControl('', [
        Validators.required,
        // Validators.pattern(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/),
      ])
    })
  }

  ngOnInit(): void {
  }
  xuLyDangNhap() {
    this.signinForm.markAllAsTouched();
    if (this.signinForm.invalid) return;
    console.log(this.signinForm.value);
    this.auth.dangNhap(this.signinForm.value).subscribe({
      next: (result: any) => {
        console.log(result);
        localStorage.setItem('userInfo', JSON.stringify(result))
        if (result.maLoaiNguoiDung === "KhachHang") {
          this.router.navigate(['/']);
        }
        if (result.maLoaiNguoiDung === 'QuanTri') {
          this.router.navigate(['/admin'])
        }
      },
      error: (err) => {
        console.log(err.error);

      },
      complete: () => {
        console.log("Đăng nhập thành công");

      }
    })
  }
}
