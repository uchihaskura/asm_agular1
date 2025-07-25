import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { RouterModule } from "@angular/router";
import { AdminRoutingModule } from "./admin/admin-routing-module";
import { ClientRoutingModule } from "./client/client-routing-module";







@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterOutlet,RouterModule,AdminRoutingModule, ClientRoutingModule],
  templateUrl: "./app.html",
})
export class AppComponent {
  parentData: string = "Hello from Parent Component!";
}