import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule for structural directives like *ngFor

@Component({
  selector: 'app-user-list',
  imports: [CommonModule],
  templateUrl: './user.html',
  styleUrl: './user.css'
})
export class UserList {
  users = [
    { id: 1, name: 'John Doe', email: 'jonhdoe @example.com', role: 'Admin' },
    { id: 2, name: 'Jane Smith', email: 'janesmith @example.com', role: 'User' },
    { id: 3, name: 'Alice Johnson', email: 'alicej @example.com', role: 'User' },
    { id: 4, name: 'Bob Brown', email: 'bobb @example.com', role: 'Moderator' },
    { id: 5, name: 'Charlie White', email: 'charliew @example.com', role: 'User' }
  ];

}
