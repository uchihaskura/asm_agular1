import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms'; 
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [FormsModule, RouterLink], 
  templateUrl: './register.html',
  styleUrls: ['./register.css']
})
export class RegisterComponent {
  onRegister(form: NgForm) {
    if (form.valid) {
      console.log(form.value);
      // TODO: Gửi dữ liệu lên API
    }
  }
}
