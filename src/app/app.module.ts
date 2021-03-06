import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// composants
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { VersionsComponent } from './versions/versions.component';

// services providers
import { AuthenticationServiceProvider, ProductServiceProvider, VersionServiceProvider } from './service/service.provider'

// modules
import { AppRoutingModule } from './app-routing.module';

// Configuration
import { AppConfig } from './app.config';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    EditProductComponent,
    VersionsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    AuthenticationServiceProvider,
    ProductServiceProvider,
    VersionServiceProvider,
    { provide: 'urlServiceAuthentification', useValue: AppConfig.URL_API_AUTHENTIFICATION },
    { provide: 'urlServiceAppli', useValue: AppConfig.URL_API_MICROSERVICE_APPLI },
    { provide: 'urlServiceVersion', useValue: AppConfig.URL_API_MICROSERVICE_VERSION },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
