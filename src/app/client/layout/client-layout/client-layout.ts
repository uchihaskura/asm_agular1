import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';




@Component({
  selector: 'app-client-layout',
  imports: [RouterOutlet,RouterModule ],
  templateUrl: './client-layout.html',
  styleUrl: './client-layout.css'
})
export class ClientLayout {

}
