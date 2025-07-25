import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-brand-create',
 imports: [FormsModule, CommonModule],
  templateUrl: './brand.html',
  styleUrl: './brand.css'
})
export class BrandCreate {
  brand = {
    name: '',
    logo: '',
  };

  handleSubmit(brandForm: NgForm) {
    console.log('brandForm', brandForm);
    if (!brandForm.invalid) {
      // submit
    }
    // console.log('brand', this.brand);
  }

}
