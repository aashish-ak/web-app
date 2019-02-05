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

  /** Data source for table */
  dataSource: any;
  /** Displayed Columns in the table */
  displayedColumns: any = ['name', 'description', 'isCashPayment', 'position', 'edit', 'delete'];

  /**
   * Retrieves the Payment Type data.
   * Adds data to the table.
   * @param {Router} router Router.
   * @param {ActivatedRoute} route Activated Route.
   * @param {organizationService} OrganizationService Loan Service.
   */
  constructor(private router: Router,
              private route: ActivatedRoute,
              private organizationsService: OrganizationService) {
    this.route.data.subscribe((data: {
        paymentTypesData: any
      }) => {
        this.dataSource = data.paymentTypesData;
    });
  }

  ngOnInit() {
  }

  deletePaymentType(paymentTypeId: any) {
    this.organizationsService.deletePaymentType(paymentTypeId).subscribe((data: any) => {
      console.log(data);
    });
  }
}
