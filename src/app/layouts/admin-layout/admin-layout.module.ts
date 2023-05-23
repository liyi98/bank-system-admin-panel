import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ClipboardModule } from 'ngx-clipboard';

import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CreditCardComponent } from 'src/app/pages/credit-card/credit-card.component';
import { AddCreditCardComponent } from 'src/app/pages/credit-card/add-credit-card/add-credit-card.component';
import { CreditCardApplyComponent } from 'src/app/pages/credit-card-apply/credit-card-apply.component';
import { CreditCardApplicantComponent } from 'src/app/pages/credit-card-applicant/credit-card-applicant.component';
import { ViewCreditCardComponent } from 'src/app/pages/credit-card-applicant/view-credit-card-applicant/view-credit-card-applicant.component';
// import { ToastrModule } from 'ngx-toastr';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    HttpClientModule,
    NgbModule,
    ClipboardModule
  ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    TablesComponent,
    IconsComponent,
    MapsComponent,
    CreditCardComponent,
    AddCreditCardComponent,
    CreditCardComponent,
    CreditCardApplyComponent,
    ViewCreditCardComponent,
    CreditCardApplicantComponent
  ]
})

export class AdminLayoutModule {}
