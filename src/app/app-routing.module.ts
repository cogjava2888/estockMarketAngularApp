import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyDashboardComponent } from './company-dashboard/company-dashboard.component';
import { CompanyGetAllComponent } from './company-get-all/company-get-all.component';
import { CompanyGetbyCompanycodeComponent } from './company-getby-companycode/company-getby-companycode.component';
import { CompanyRegisterCompanyComponent } from './company-register-company/company-register-company.component';
import { StockDetailsComponent } from './stock-details/stock-details.component';

const routes: Routes = [
  { path:'', component: CompanyDashboardComponent},
  { path: 'registerCompany', component: CompanyRegisterCompanyComponent},
  { path: 'getAllCompany', component: CompanyGetAllComponent },
  { path: 'getByCompanyCode/:companyCode', component: CompanyGetbyCompanycodeComponent},
  { path: 'getStockByDate/:companyCode/:startDate/:endDate', component: StockDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
