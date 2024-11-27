import { Component } from '@angular/core';
import { Users } from '../users';
import { UserserviceService } from '../userservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usermanagement',
  standalone: false,
  
  templateUrl: './usermanagement.component.html',
  styleUrl: './usermanagement.component.css'
})
export class UsermanagementComponent {
  user:Users;
  constructor(private userserv:UserserviceService,private router:Router) { 
    this.user=new Users();
  }


  

}
