import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // ✅ cho [(ngModel)]

@Component({
  selector: 'app-user-add',
  templateUrl: 'user-create.html',
  styleUrls: ['user-create.css'],
   imports: [CommonModule, FormsModule,]  
})
export class UserAddComponent {
  user = {
    name: '',
    email: '',
    role: ''
  };

  handleSubmit(form: any) {
    if (form.valid) {
      console.log('User data:', this.user);
      // Gọi API lưu user hoặc xử lý logic thêm user ở đây
      alert('User added successfully!');
      form.resetForm(); // Reset form sau khi submit
    }
  }
}
