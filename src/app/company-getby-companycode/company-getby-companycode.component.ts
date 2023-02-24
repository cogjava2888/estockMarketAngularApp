import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Company } from '../company';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-company-getby-companycode',
  templateUrl: './company-getby-companycode.component.html',
  styleUrls: ['./company-getby-companycode.component.css']
})
export class CompanyGetbyCompanycodeComponent implements OnInit{

  companyCode!: any;

  companyDetails : Company = new Company;
  
  constructor(private router : Router, private httpClient : HttpClient,private apiService: ApiService,private route: ActivatedRoute){

  }

  //for request param
  ngOnInit(){
  
    this.route.paramMap.subscribe((res:ParamMap)=>{
        this.companyCode = res.get('companyCode');
    });


    return this.apiService.getByCompanyCode(this.companyCode).subscribe((response :any)=>{
       this.companyDetails.companyCode = response.companyCode;
       this.companyDetails.companyName = response.companyName;
       this.companyDetails.companyCEO = response.companyCEO;
       this.companyDetails.companyTurnOver = response.companyTurnOver;
       this.companyDetails.companyWebsite = response.companyWebsite;
       this.companyDetails.stockExchange = response.stockExchange;
       this.companyDetails.latestStockPrice = response.latestStockPrice;
    });
  }

    stockForm : FormGroup = new FormGroup({
      startDate : new FormControl(null, Validators.required),
      endDate : new FormControl(null, Validators.required),
      companyCode : new FormControl(null, Validators.required) 
    });


    loadStockDetails(){
      this.router.navigateByUrl('getStockByDate/'+ this.companyCode + '/'+ this.stockForm.value.startDate +'/' + this.stockForm.value.endDate);
    }




}








