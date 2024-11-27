import { Component } from '@angular/core';
import { Roles } from '../roles';
import { RoleserviceService } from '../roleservice.service';

@Component({
  selector: 'app-getrole',
  standalone: false,
  
  templateUrl: './getrole.component.html',
  styleUrl: './getrole.component.css'
})
export class GetroleComponent {
  role:Roles[]=[];
  constructor(private roleserv:RoleserviceService) { }

  ngOnInit() {

    this.roleserv.getrolelist().subscribe(result=>{
      this.role=result;
    })
  }
}
