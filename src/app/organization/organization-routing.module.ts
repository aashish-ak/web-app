/** Angular Imports */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/** Routing Imports */
import { Route } from '../core/route/route.service';

/** Translation Imports */
import { extract } from '../core/i18n/i18n.service';

/** Custom Components */
import { OrganizationComponent } from './organization.component';
import { ViewPaymentTypeComponent } from './view-payment-type/view-payment-type.component';

/** Custom Resolvers */
import { ViewPaymentTypeResolver } from './view-payment-type/view-payment-type.resolver';

/** Organization Routes */
const routes: Routes = [
  Route.withShell([
    {
      path: 'organization',
      data: { title: extract('Organization'), breadcrumb: 'Organization', addBreadcrumbLink: false },
      children: [
        {
          path: '',
          component: OrganizationComponent,
        },
        {
          path: 'viewpaymenttype',
          component: ViewPaymentTypeComponent,
          data: { title: extract('Payment Type'), breadcrumb: 'Payment Type', },
          resolve: {
            paymentTypes: ViewPaymentTypeResolver
          }
        }
      ]
    }
  ])
];

/**
 * Organization Routing Module
 *
 * Configures the organization routes.
 */
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrganizationRoutingModule { }
