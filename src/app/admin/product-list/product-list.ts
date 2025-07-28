import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';     // ✅ cho *ngIf, *ngFor
import { FormsModule } from '@angular/forms';       // ✅ cho [(ngModel)]
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,                                 // ✅ thêm dòng này
  selector: 'app-product-list',
  templateUrl: './product-list.html',
  styleUrls: ['./product-list.css'],
  imports: [CommonModule, FormsModule,RouterLink]              // ✅ thêm dòng này
})
export class ProductListComponent {
  filterText = '';

  products = [
    { id: 1, name: 'Shoe A', price: 100, inStock: true },
    { id: 2, name: 'Shoe B', price: 150, inStock: false },
    { id: 3, name: 'Shoe C', price: 200, inStock: true },
    { id: 4, name: 'Shoe D', price: 250, inStock: false },
    { id: 5, name: 'Shoe E', price: 300, inStock: true }
  ];

  filterProducts() {
    return this.products.filter(p =>
      p.name.toLowerCase().includes(this.filterText.toLowerCase())
    );
  }
}
