import { Component } from '@angular/core';
import { Roles } from '../roles';
import { RoleserviceService } from '../roleservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-postrole',
  standalone: false,
  
  templateUrl: './postrole.component.html',
  styleUrl: './postrole.component.css'
})
export class PostroleComponent {
  role:Roles;
  constructor(private roleserv:RoleserviceService,private router:Router) { 
    this.role=new Roles();
  }

  addroles(){

    console.log("user in ts",this.role);
    this.roleserv.saverole(this.role).subscribe(result=>{
      
    });
  }
}
