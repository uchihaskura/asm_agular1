import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-brand-list',
  imports: [CommonModule],
  templateUrl: './brand-list.html',
  styleUrl: './brand-list.css'
})
export class BrandList {
  brands = [
    { name: 'Nike', id: 'nike' },
    { name: 'Adidas', id: 'adidas' },
    { name: 'Puma', id: 'puma' },
    { name: 'Reebok', id: 'reebok' },
    { name: 'Under Armour', id: 'under-armour' }
  ];

  constructor() {

  }

}
