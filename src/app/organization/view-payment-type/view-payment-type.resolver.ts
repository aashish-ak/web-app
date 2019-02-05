/** Angular Imports */
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

/** rxjs Imports */
import { Observable } from 'rxjs';

/** Custom Services */
import { OrganizationService } from '../organization.service';

/**
 * View Payment Type data resolver.
 */
@Injectable()
export class ViewPaymentTypeResolver implements Resolve<Object> {

  /**
   * @param {OrganizationService} organizationService Shares service.
   */
  constructor (private organizationService: OrganizationService) { }

  /**
   * Returns the Share Account data.
   * @returns {Observable<any>}
   */
  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    return this.organizationService.getAllPaymentTypes();
  }

}