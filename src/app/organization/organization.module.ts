/** Angular Imports */
import { NgModule } from '@angular/core';

/** Custom Modules */
import { SharedModule } from '../shared/shared.module';
import { OrganizationRoutingModule } from './organization-routing.module';

/** Custom Components */
import { OrganizationComponent } from './organization.component';
import { ViewPaymentTypeComponent } from './view-payment-type/view-payment-type.component';

/** Custom Resolvers */
import { ViewPaymentTypeResolver } from './view-payment-type/view-payment-type.resolver';

/**
 * Organization Module
 *
 * All components related to organization functions should be declared here.
 */
@NgModule({
  imports: [
    SharedModule,
    OrganizationRoutingModule
  ],
  declarations: [
    OrganizationComponent,
    ViewPaymentTypeComponent
  ],
providers: [
  ViewPaymentTypeResolver
]
})
export class OrganizationModule { }
