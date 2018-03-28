import {CanActivate} from "@angular/router";
import { Injectable } from "@angular/core";
@Injectable()
export class AlwaysAuthGuard implements CanActivate {
    canActivate() {
      console.log("AlwaysAuthGuard");
      return true;
    }
  }