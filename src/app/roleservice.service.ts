import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Roles } from './roles';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoleserviceService {
  private roleslisturl:string;
  private postroles:string;
  private updateroles:string;

  constructor(private http:HttpClient) {
    this.roleslisturl='http://localhost:8080/getroledetails';
    this.postroles='http://localhost:8080/saveroledetails';
this.updateroles='http://localhost:8080/updaterole';
   }

   saverole(role:Roles){
    console.log(role.rolename+"-"+role.description);
    return this.http.post<Roles>(this.postroles,role);
  }

  getrolelist():Observable<Roles[]>{
    return this.http.get<Roles[]>(this.roleslisturl);

  }

  updaterole(role:Roles){
    console.log(role.rolename+"-"+role.description);
    return this.http.put<Roles>(this.updateroles,role);
  }


  deleterole(role: any): Observable<any> {
    const url = `http://localhost:8080/deleterole/${role.roleid}`; // Adjust API endpoint as needed
    return this.http.delete(url); // HTTP DELETE request
  }
}
