import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot,Route, UrlSegment, CanActivate, RouterStateSnapshot, UrlTree, CanLoad } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class LazzyauthGuard implements CanLoad  {
  constructor(private authService: AuthService) { }
  
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (this.authService.UserSubjectValue) {
        return true
      }
      window.alert("Please login to continue the service");
      return false;
  }
  
}
