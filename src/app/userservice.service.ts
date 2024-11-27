import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Users } from './users';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  private userslisturl:string;
  private postuser:string;
  private updateuser:string;


  constructor(private http:HttpClient) { 
    this.userslisturl='http://localhost:8080/getuserdetails';
    this.postuser='http://localhost:8080/saveuserdetails';
this.updateuser='http://localhost:8080/updateuser';
    
  }


  saveuser(user:Users){
    console.log(user.username+"-"+user.email);
    return this.http.post<Users>(this.postuser,user);
  }

  getuserlist():Observable<Users[]>{
    return this.http.get<Users[]>(this.userslisturl);

  }

  update(user:Users){
    console.log(user.username+"-"+user.email);
    return this.http.put<Users>(this.updateuser,user);
  }


  deleteUser(user: any): Observable<any> {
    const url = `http://localhost:8080/deleteuser/${user.employeeid}`; // Adjust API endpoint as needed
    return this.http.delete(url); // HTTP DELETE request
  }

  
}
