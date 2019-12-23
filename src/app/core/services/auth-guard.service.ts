import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot
} from "@angular/router";
import { Observable } from "rxjs";

import { UserService } from "./user.service";
import { take } from "rxjs/operators";

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private userService: UserService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.userService.authenticated()) {
      return true;
    } else {
      this.router.navigate(["/auth/login"], {
        queryParams: {
          return: state.url
        }
      });
      return false;
    }
  }
}
