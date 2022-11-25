import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AddPostsComponent } from './add-posts/add-posts.component';
import { ViewPostsComponent } from './view-posts/view-posts.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AddPostsComponent,
    ViewPostsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
