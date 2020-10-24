import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(private router: Router) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const userInfo = localStorage.getItem('userInfo')
    if (userInfo) {
      const { maLoaiNguoiDung } = JSON.parse(userInfo)
      if (maLoaiNguoiDung === 'QuanTri') {
        // là admin
        return true;
      }
      // đăng nhập nhưng maLoaiNguoiDung !==QuanTri
      // =>redirect về homepage
      this.router.navigate(['/'])
    }
    // chưa đăng nhập redirec về trang sigin
    this.router.navigate(['/signin'])
    return false;
    // dùng để bảo vệ route khi người dùng muốn truy cập vào
    // return true nếu muốn ng dùng truy cập vào

  }

}
