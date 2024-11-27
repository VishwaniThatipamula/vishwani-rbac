import { Component } from '@angular/core';
import { Users } from '../users';
import { UserserviceService } from '../userservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-deleteusers',
  standalone: false,
  
  templateUrl: './deleteusers.component.html',
  styleUrl: './deleteusers.component.css'
})
export class DeleteusersComponent {
  user = {
    employeeid: '' // Initialize the user object with an empty employee ID
  };

  constructor(private userService: UserserviceService, private router: Router) {}


  deleteUsers() {
    if (!this.user?.employeeid?.trim()) return alert('Please enter a valid Employee ID.');
  
    this.userService.deleteUser(this.user).subscribe({
      next: () => (alert('User deleted successfully!'), this.router.navigate([''])),
    });
  }
  
}
  
