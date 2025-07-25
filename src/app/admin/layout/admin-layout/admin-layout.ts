import { Component } from '@angular/core';
import { AdminRoutingModule } from "../../../admin/admin-routing-module";
import { Sidebar } from '../../sidebar/sidebar';


@Component({
  selector: 'app-admin-layout',
  imports: [AdminRoutingModule, Sidebar],
  templateUrl: './admin-layout.html',
  styleUrl: './admin-layout.css'
})
export class AdminLayout {

}
