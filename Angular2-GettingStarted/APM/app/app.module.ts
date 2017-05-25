import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { WelcomeComponent } from './home/welcome.component';
import { ProductsModule } from './products/products.module';

import { AppRoutingModule } from './app-routing.module';
 
@NgModule({
  imports: [ 
    BrowserModule, 
    ProductsModule,
    AppRoutingModule
  ],
  declarations: [ 
    AppComponent, 
    WelcomeComponent
  ],
  bootstrap: [ 
    AppComponent
  ]
})
export class AppModule { }


// declarations array: components, directives and pipes
// providers array: allow us to declare service providers that are shared in all application (the service providers are registered at the root of the application)
