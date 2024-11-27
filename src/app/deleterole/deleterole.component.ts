import { Component } from '@angular/core';
import { RoleserviceService } from '../roleservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-deleterole',
  standalone: false,
  
  templateUrl: './deleterole.component.html',
  styleUrl: './deleterole.component.css'
})
export class DeleteroleComponent {
  role = {
    roleid: '' // Initialize the user object with an empty employee ID
  };

  constructor(private roleService:RoleserviceService, private router: Router) {}


  deleteRoles() {
    if (!this.role?.roleid?.trim()) return alert('Please enter a valid Employee ID.');
  
    this.roleService.deleterole(this.role).subscribe({
      next: () => (alert('User deleted successfully!'), this.router.navigate([''])),
    });
  }
}
