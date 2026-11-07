import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';


export interface QuotationRequest {

  userId: number;
  productId: number;
  year: number;
  brand: string;
  model: string;
  vehicleValue: number;

}


export interface QuotationResponse {

  reference: string;
  estimatedPremium: number;

}


@Injectable({
  providedIn: 'root'
})
export class QuotationService {


  private apiUrl = environment.apiUrl;


  constructor(
    private http: HttpClient
  ){}


  createQuotation(
    quotation: QuotationRequest
  ): Observable<QuotationResponse> {


    return this.http.post<QuotationResponse>(
      `${this.apiUrl}/quotations`,
      quotation
    );

  }


}
