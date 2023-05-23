import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';
import { CreditCardApplyModel } from './credit-card-apply.model';

@Injectable({
  providedIn: 'root',
})
export class CreditCardApplyService {

  public configUrl = "http://localhost:8081/api";

  constructor(private http: HttpClient) {}

  addCreditCard(body: CreditCardApplyModel): Observable<HttpResponse<any>> {
    return this.http.post<any>(this.configUrl + "/credit-card-applicants", body, { observe: 'response' });
  }

}
