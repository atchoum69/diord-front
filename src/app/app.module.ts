import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';

import { ProductService } from './service/product.service';
import { AuthenticationService } from './service/authentication.service';

import { AppConfig } from './app.config';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [
    ProductService,
    AuthenticationService,
    { provide: "urlServiceAuthentification", useValue: AppConfig.URL_API_AUTHENTIFICATION },
    { provide: "urlServiceAppli", useValue: AppConfig.URL_API_MICROSERVICE_APPLI },
    { provide: "modeMock", useValue: AppConfig.MODE_MOCK_ENABLED },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
