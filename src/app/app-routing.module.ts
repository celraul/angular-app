import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppRoutes } from './app.routes';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [BrowserModule, RouterModule.forRoot(AppRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
