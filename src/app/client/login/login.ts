import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms'; 
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule,RouterLink], // <-- Thêm FormsModule vào imports
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class LoginComponent {
  onSubmit(form: NgForm) {
    if (form.valid) {
      const { email, password } = form.value;
      console.log('Thông tin đăng nhập:', email, password);

      // TODO: Gọi API đăng nhập ở đây
      // this.authService.login(email, password).subscribe(...)
    }
  }
}
