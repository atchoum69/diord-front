// TODO : voir comment faire une configuration dev, et une configuration prod
export class AppConfig {

  // Flag indiquant si on active le mode "bouchon"
  public static MODE_MOCK_ENABLED = true;

  // Url d'authentification a la gateway jhipster
  public static URL_API_AUTHENTIFICATION = 'http://localhost:8080/api/authenticate';

  // Url du microservice des produits (appli)
  public static URL_API_MICROSERVICE_APPLI = 'http://localhost:8081/api/produits';
}
