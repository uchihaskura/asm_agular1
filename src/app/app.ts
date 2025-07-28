import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { RouterModule } from "@angular/router";








@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterOutlet,RouterModule,],
  templateUrl: "./app.html",
})
export class AppComponent {
  parentData: string = "Hello from Parent Component!";
}