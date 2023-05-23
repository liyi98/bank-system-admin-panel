import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CreditCardApplicantService {

  public configUrl = "http://localhost:8081/api";

  constructor(private http: HttpClient) {}

  getCreditCardApplicants(): Observable<HttpResponse<any>> {
    return this.http.get<any>(
      this.configUrl + "/credit-card-applicants", { observe: 'response' });
  }

  approveApplicants(body: any): Observable<HttpResponse<any>> {
    return this.http.post<any>(this.configUrl + "/credit-card/approve", body, { observe: 'response' });
  }


}
