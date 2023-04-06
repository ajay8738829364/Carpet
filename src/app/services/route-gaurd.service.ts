import { Injectable } from '@angular/core';
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  Router,
} from '@angular/router';
import jwtDecode from 'jwt-decode';
import { global } from '../shared/global';
import { AuthGaurdService } from './auth-gaurd.service';
import { SnackBarService } from './snack-bar.service';

@Injectable({
  providedIn: 'root',
})
export class RouteGaurdService {
  constructor(
    public auth: AuthGaurdService,
    public route: Router,
    private snackBar: SnackBarService
  ) {}
  canActivate(router: ActivatedRouteSnapshot): boolean {
    let expectedRoleArray :any = router.data;
    expectedRoleArray = expectedRoleArray.expectedRole
    const token: any = localStorage.getItem('token');
    var tokenPayload: any;
    try {
      tokenPayload = jwtDecode(token);
    } catch (error) {
      localStorage.clear();
      this.route.navigate(['/']);
    }
    let checkRole = false;
    for(let i = 0;  i < expectedRoleArray.length; i++){
      if(expectedRoleArray[i]== tokenPayload.role){
        checkRole = true;
      }
    }
    var tokenPayloadRole;
    if(tokenPayloadRole == 'user' || tokenPayloadRole == 'admin')
    {
      if(this.auth.isAuthentication() && checkRole){
        return true;
      }
      this.snackBar.openSnackBar(global.unathorize,global.error);
      this.route.navigate(['/admin/dashboard']);
      return false;
    }
    else{
      this.route.navigate(['/']);
      localStorage.clear();
      return false;

    }
  }
}
