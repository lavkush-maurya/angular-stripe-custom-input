import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';

import { PaymentIntent } from '@stripe/stripe-js';

export const PLUTO_ID = new InjectionToken<string>('[PLUTO] ClientID');

// export const STRIPE_PUBLIC_KEY = 'pk_test_51Ii5RpH2XTJohkGafOSn3aoFFDjfCE4G9jmW48Byd8OS0u2707YHusT5PojHOwWAys9HbvNylw7qDk0KkMZomdG600TJYNYj20';
export const STRIPE_PUBLIC_KEY = 'pk_test_51Php9jJ4tzySvsYcvWsEsxQ1CbeTR34weX83xPDsxVucVS1BaSJ9pkDn9JrKHgFwI0He9M2KbcZXcWnCbDWE28fG00tYfPDxo7';

@Injectable({ providedIn: 'root' })
export class PlutoService {
  // private static readonly BASE_URL = 'https://api.pluto.ricardosanchez.dev/api';
  private static readonly BASE_URL = 'http://localhost:3000/api';


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
