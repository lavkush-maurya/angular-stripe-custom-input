import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';

import { PaymentIntent } from '@stripe/stripe-js';

export const PLUTO_ID = new InjectionToken<string>('[PLUTO] ClientID');

export const STRIPE_PUBLIC_KEY = 'pk_test_51Php9jJ4tzySvsYcvWsEsxQ1CbeTR34weX83xPDsxVucVS1BaSJ9pkDn9JrKHgFwI0He9M2KbcZXcWnCbDWE28fG00tYfPDxo7';

@Injectable({ providedIn: 'root' })
export class PlutoService {
  private static readonly BASE_URL = 'https://backend-stripe-4q2a.onrender.com/api'; //live
  // private static readonly BASE_URL = 'http://localhost:3000/api'; // local


  constructor(
    @Inject(PLUTO_ID) private readonly clientId: string,
    private readonly http: HttpClient
  ) {}

  createPaymentIntent(params: any): Observable<PaymentIntent> {
    return this.http.post<PaymentIntent>(
      `${PlutoService.BASE_URL}/payments/create-payment-intent`,
      params,
      { headers: { merchant: this.clientId } }
    );
  }
}
