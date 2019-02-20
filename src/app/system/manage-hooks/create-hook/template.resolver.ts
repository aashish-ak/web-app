/** Angular Imports */
import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';

/** rxjs Imports */
import { Observable } from 'rxjs';

/** Custom Services */
import { SystemService } from '../../system.service';

/**
 * Templates data resolver.
 */
@Injectable()
export class TemplatesResolver implements Resolve<Object> {

  /**
   * @param {SystemService} systemService System service.
   */
  constructor(private systemService: SystemService) {}

  /**
   * Returns all templates data.
   * @returns {Observable<any>}
   */
  resolve(): Observable<any> {
    return this.systemService.getTemplates();
  }

}
