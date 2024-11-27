import { Component } from '@angular/core';
import { Users } from '../users';
import { UserserviceService } from '../userservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-postuser',
  standalone: false,
  
  templateUrl: './postuser.component.html',
  styleUrl: './postuser.component.css'
})
export class PostuserComponent {
  user:Users;
  constructor(private userserv:UserserviceService,private router:Router) { 
    this.user=new Users();
  }

  addusers(){

    console.log("user in ts",this.user);
    this.userserv.saveuser(this.user).subscribe(result=>{
      
      this.router.navigate(['']);
    });
  }
}
