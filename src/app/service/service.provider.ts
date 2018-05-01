import { Http } from '@angular/http';

// Services
import { AuthenticationService } from './authentication.service';
import { AuthenticationMockService } from './authentication-mock.service';
import { ProductService } from './product.service';
import { ProductMockService } from './product-mock.service';
import { VersionService } from './version.service';
import { VersionMockService } from './version-mock.service';

// Configuration
import { AppConfig } from '../app.config';

// Factory et provider pour l'authentification
const authServiceFactory = (http: Http, urlServiceAuthentification: string) => {
    if (AppConfig.MODE_MOCK_ENABLED) {
        return new AuthenticationMockService();
    } else {
        return new AuthenticationService(http, urlServiceAuthentification);
    }
};
export let AuthenticationServiceProvider = {
    provide: AuthenticationService,
    useFactory: authServiceFactory,
    deps: [Http, 'urlServiceAuthentification']
};

// Factory et provider pour les produits
const productServiceFactory = (http: Http, urlServiceAppli: string) => {
    if (AppConfig.MODE_MOCK_ENABLED) {
        return new ProductMockService();
    } else {
        return new ProductService(http, urlServiceAppli);
    }
};
export let ProductServiceProvider = {
    provide: ProductService,
    useFactory: productServiceFactory,
    deps: [Http, 'urlServiceAppli']
};

// Factory et provider pour les versions de produits
const versionServiceFactory = (http: Http, urlServiceVersion: string) => {
    if (AppConfig.MODE_MOCK_ENABLED) {
        return new VersionMockService();
    } else {
        return new VersionService(http, urlServiceVersion);
    }
};
export let VersionServiceProvider = {
    provide: VersionService,
    useFactory: versionServiceFactory,
    deps: [Http, 'urlServiceVersion']
};
