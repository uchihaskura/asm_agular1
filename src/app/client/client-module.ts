import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ClientRoutingModule } from './client-routing-module';
import { ClientLayout } from './layout/client-layout/client-layout';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ClientRoutingModule,
    RouterLink,
    ClientLayout
  ]
})
export class ClientModule { }
