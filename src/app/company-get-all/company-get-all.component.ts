import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { VirtualTimeScheduler } from 'rxjs';
import { Company } from '../company';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-company-get-all',
  templateUrl: './company-get-all.component.html',
  styleUrls: ['./company-get-all.component.css']
})
export class CompanyGetAllComponent implements OnInit {

companyDetailsList : Company[] =[];

  constructor(private router: Router, private httpClient : HttpClient, private apiService : ApiService,
    private route : ActivatedRoute, private toastr : ToastrService){

  }

  ngOnInit(){


    return this.apiService.getAllCompany().subscribe((response: any)=>{
      for(const res of response ){
          this.companyDetailsList.push(res);
      }
    });
  }

  delete(companyCode : string){
     if(confirm("This action will delete  company and all its stock details!! Do u bwant to proceed??") ){
       return this.apiService.deleteCompany(companyCode).subscribe(
           (response : any)=>{
                 this.success();
           },
           (error : any) =>{
               this.failure();
           });
      }
       return;
  }
  
  success(){
    this.toastr.warning("Company Deleted Successfully!!!!");
    window.location.reload();
  }

  failure(){
    this.toastr.error("Something went wrong while deleting the compay details...!!!!");
    window.location.reload();
  }


}
