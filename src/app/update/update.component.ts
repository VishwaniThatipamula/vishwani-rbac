import { Component } from '@angular/core';
import { Users } from '../users';
import { UserserviceService } from '../userservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update',
  standalone: false,
  
  templateUrl: './update.component.html',
  styleUrl: './update.component.css'
})
export class UpdateComponent {
  user: Users;

  constructor(private userserv: UserserviceService, private router: Router) {
    this.user = new Users();  // Initialize user object
  }

  updatusers() {
    console.log('User data in TS:', this.user);  // Check the user object before submitting

    // Call the update method from the service
    this.userserv.update(this.user).subscribe(
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
