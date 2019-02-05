/** TODO: Separate services for feature modules for cleaner accounting service. */

/** Angular Imports */
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

/** rxjs Imports */
import { Observable } from 'rxjs';

/**
 * Organization service.
 */
@Injectable({
  providedIn: 'root'
})
export class OrganizationService {

  /**
   * @param {HttpClient} http Http Client to send requests.
   */
  constructor (private http: HttpClient) { }

  getAllPaymentTypes(){
    return this.http.get();
  }

}
