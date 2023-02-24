import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ErrorDialogueComponent } from '../dilog/error-dialogue/error-dialogue.component';
import { SuccessDialogueComponent } from '../dilog/success-dialogue/success-dialogue.component';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-company-register-company',
  templateUrl: './company-register-company.component.html',
  styleUrls: ['./company-register-company.component.css']
})
export class CompanyRegisterCompanyComponent implements OnInit {


constructor(private router: Router, private httpClient: HttpClient,
  private apiService: ApiService, private toastr: ToastrService, private dialog : MatDialog){

}

  ngOnInit(){}
  
  companyForm : FormGroup = new FormGroup({
    companyCode : new FormControl(null, Validators.required),
    companyName : new FormControl(null, Validators.required),
    companyCEO: new FormControl(null, Validators.required),
    companyTurnOver: new FormControl(null, [Validators.min(10000000)]),
    companyWebsite: new FormControl(null, Validators.required),
    stockExchange : new FormControl()
  });

  register(){
 
   this.apiService.postCompany(this.companyForm.value).subscribe(
    (response)=>{
       console.log("started success!!"+response);
        this.showSuccess();
       
     },

     (error)=>{

      console.log("response is:"+error);
        this.showError();
        //window.location.reload();

     }

  );
 
 // this.showSuccess();

        this.companyForm.reset();
   //window.location.reload();

  }

  showSuccess(){
   // this.toastr.success('Company Registered Successfully!!!!');
   console.log("Reached Success!!!");
     this.dialog.open(SuccessDialogueComponent,
    { data  : {message: " Company Registered Successfully!!!! "}
    });
  }

  showError(){
    //this.toastr.error('Something went wrong while registeration!!!!');
    this.dialog.open(ErrorDialogueComponent,
      { data  : {message: "Something went wrong while registeration!!!!"}
      });
   
  }

}
