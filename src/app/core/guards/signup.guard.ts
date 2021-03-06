import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { SignupComponent } from 'src/app/authentication/signup/signup.component';

@Injectable({
  providedIn: 'root'
})
export class SignupGuard implements CanDeactivate<SignupComponent> {
  canDeactivate(
    component: SignupComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    // ngăn chặn người dùng rời khỏi

    const isDirty = component.checkDirtyForm()
    if (isDirty) {
      return confirm('Bạn có chắc muốn rời khỏi?')

    }
    // return true => cho phép rời khỏi
    return true;

  }

}
