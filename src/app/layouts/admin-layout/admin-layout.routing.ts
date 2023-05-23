import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import { CreditCardComponent } from 'src/app/pages/credit-card/credit-card.component';
import { AddCreditCardComponent } from 'src/app/pages/credit-card/add-credit-card/add-credit-card.component';
import { CreditCardApplyComponent } from 'src/app/pages/credit-card-apply/credit-card-apply.component';
import { CreditCardApplicantComponent } from 'src/app/pages/credit-card-applicant/credit-card-applicant.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'tables',         component: TablesComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'credit-card',    component: CreditCardComponent },
    { path: 'add-credit-card',    component: AddCreditCardComponent },
    { path: 'credit-card-apply',    component: CreditCardApplyComponent },
    { path: 'credit-card-applicant',    component: CreditCardApplicantComponent }
];