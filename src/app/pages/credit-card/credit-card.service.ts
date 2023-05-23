import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';
import { CreditCardModel } from './credit-card.model';

@Injectable({
  providedIn: 'root',
})
export class CreditCardService {

  public configUrl = "http://localhost:8081/api";

  constructor(private http: HttpClient) {}

  getCreditCardsType(): Observable<HttpResponse<any>> {
    return this.http.get<any>(
      this.configUrl + "/credit-card-types", { observe: 'response' });
  }

  addCreditCard(body: CreditCardModel): Observable<HttpResponse<any>> {
    return this.http.post<any>(this.configUrl + "/add-credit-card-types", body, { observe: 'response' });
  }

}
