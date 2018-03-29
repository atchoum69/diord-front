import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// composants
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { VersionsComponent } from './versions/versions.component';

// services
import { ProductService } from './service/product.service';
import { AuthenticationService } from './service/authentication.service';

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
    ProductService,
    AuthenticationService,
    { provide: 'urlServiceAuthentification', useValue: AppConfig.URL_API_AUTHENTIFICATION },
    { provide: 'urlServiceAppli', useValue: AppConfig.URL_API_MICROSERVICE_APPLI },
    { provide: 'modeMock', useValue: AppConfig.MODE_MOCK_ENABLED },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
