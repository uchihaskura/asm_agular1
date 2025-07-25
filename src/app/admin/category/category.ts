import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-category-create',
  imports: [FormsModule, CommonModule],
  templateUrl: './category.html',
  styleUrls: ['./category.css']
})
export class CategoryCreateComponent {
  category = {
    name: '',
    description: ''
  };

  handleSubmit(categoryForm: NgForm) {
    if (!categoryForm.invalid) {
      console.log('Category Data:', this.category);
      // Gọi API hoặc xử lý thêm category
    }
  }
}
