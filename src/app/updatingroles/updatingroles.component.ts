import { Component } from '@angular/core';
import { Roles } from '../roles';
import { RoleserviceService } from '../roleservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-updatingroles',
  standalone: false,
  
  templateUrl: './updatingroles.component.html',
  styleUrl: './updatingroles.component.css'
})
export class UpdatingrolesComponent {
  role: Roles;

  constructor(private roleserv:RoleserviceService, private router: Router) {
    this.role = new Roles();  // Initialize user object
  }

  updatroless() {
    console.log('User data in TS:', this.role);  // Check the user object before submitting

    // Call the update method from the service
    this.roleserv.updaterole(this.role).subscribe(
      result => {
        console.log('Update successful', result);
        this.router.navigate(['']);  // Redirect to home or another page after update
      },
      error => {
        console.error('Error updating user', error);
        // Handle error (e.g., show an error message to the user)
      }
    );
  }

}
