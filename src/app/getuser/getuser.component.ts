import { Component } from '@angular/core';
import { Users } from '../users';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-getuser',
  standalone: false,
  
  templateUrl: './getuser.component.html',
  styleUrl: './getuser.component.css'
})
export class GetuserComponent {
  user:Users[]=[];
  constructor(private userserv:UserserviceService) { }

  ngOnInit() {

    this.userserv.getuserlist().subscribe(result=>{
      this.user=result;
    })
  }
}
