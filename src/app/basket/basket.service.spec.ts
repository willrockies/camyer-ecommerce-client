
import { environment } from './../../environments/environment';
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { BasketService } from './basket.service';

describe('BasketService', () => {
  let service: BasketService;
  let httpTestingController: HttpTestingController;
  let baseUrl = environment.apiUrl;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [BasketService]
    });
    service = TestBed.inject(BasketService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });


  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should retrieve basket from API via GET', () => {
    const mockBasketId = '123';
    const mockBasket = { id: '123', items: [] };

    // Espiar o método `next` do BehaviorSubject
    const spy = spyOn(service['basketSource'], 'next');

    // Chamar o método que está sendo testado
    service.getBasket(mockBasketId);

    // Esperar a requisição HTTP e simular uma resposta
    const req = httpTestingController.expectOne(`${service.baseUrl}basket?id=${mockBasketId}`);
    expect(req.request.method).toEqual('GET');
    req.flush(mockBasket);

    // Verificar se o método `next` foi chamado com o valor correto
    expect(spy).toHaveBeenCalledWith(mockBasket);
  });


});
