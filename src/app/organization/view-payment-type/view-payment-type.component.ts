/** Angular Imports */
import { Component, OnInit } from '@angular/core';

/** Routing Imports */
import { ActivatedRoute, Router } from '@angular/router';

/** Custom Imports */
import { OrganizationService } from '../organization.service';

/** Custom Models */
import { PaymentType } from './payment-type.model';

/**
 * View Payment Type Component
 */
@Component({
  selector: 'mifosx-view-payment-type',
  templateUrl: './view-payment-type.component.html',
  styleUrls: ['./view-payment-type.component.scss']
})
export class ViewPaymentTypeComponent implements OnInit {

  /**
   * Retrieves the Payment Type data.
   * Adds data to the table.
   * @param {Router} router Router.
   * @param {ActivatedRoute} route Activated Route.
   * @param {organizationService} OrganizationService Loan Service.
   */
  constructor(private router: Router,
              private route: ActivatedRoute,
              private organizationsService: OrganizationService) { }

  ngOnInit() {
  }

}
