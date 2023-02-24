import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompanyDashboardComponent } from './company-dashboard/company-dashboard.component';
import { CompanyGetAllComponent } from './company-get-all/company-get-all.component';
import { CompanyGetbyCompanycodeComponent } from './company-getby-companycode/company-getby-companycode.component';
import { CompanyRegisterCompanyComponent } from './company-register-company/company-register-company.component';
import { ErrorDialogueComponent } from './dilog/error-dialogue/error-dialogue.component';
import { SuccessDialogueComponent } from './dilog/success-dialogue/success-dialogue.component';
import { StockDetailsComponent } from './stock-details/stock-details.component';

@NgModule({
  declarations: [
    AppComponent,
    CompanyDashboardComponent,
    CompanyRegisterCompanyComponent,
    CompanyGetAllComponent,
    CompanyGetbyCompanycodeComponent,
    StockDetailsComponent,
    ErrorDialogueComponent,
    SuccessDialogueComponent
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    MatDialogModule,
    BrowserAnimationsModule, //required animations module
    ToastrModule.forRoot()  //ToastrModule added
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
