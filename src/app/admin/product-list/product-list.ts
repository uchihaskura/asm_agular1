import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';     // ✅ cho *ngIf, *ngFor
import { FormsModule } from '@angular/forms';       // ✅ cho [(ngModel)]
import { RouterLink } from '@angular/router';
import { ProductService , Product} from '../../services/product.service';

@Component({
  standalone: true,                                 // ✅ thêm dòng này
  selector: 'app-product-list',
  templateUrl: './product-list.html',
  styleUrls: ['./product-list.css'],
  imports: [CommonModule, FormsModule,RouterLink]              // ✅ thêm dòng này
})
export class ProductListComponent {
  products: Product[]=[];

  filterText = '';


    constructor(private productService:ProductService){}
  
    ngOnInit(){
      this.productService.getProducts().subscribe({
        next: (data) => {
          console.log(data);
          this.products = data
        },
        error:(err)=>
          console.log(err)
      })
    }
    filterProducts() {
    return this.products.filter(p =>
      p.name.toLowerCase().includes(this.filterText.toLowerCase())
    );
  }
}
