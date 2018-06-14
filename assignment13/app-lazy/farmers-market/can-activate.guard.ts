import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DbService } from './db.service';

@Injectable({
  providedIn: 'root'
})
export class CanActivateGuard implements CanActivate {
  data;
  constructor(private db:DbService,private r:Router){
    this.data=db.getDate();
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      const v=this.data.find(x=>x._id==next.params['id']);
      if(!v){
        this.r.navigate(['fmarkets','error']);
        return false;
      }
    return true;
  }
}
