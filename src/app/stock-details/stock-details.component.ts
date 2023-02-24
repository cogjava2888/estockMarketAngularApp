import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ErrorDialogueComponent } from '../dilog/error-dialogue/error-dialogue.component';
import { SuccessDialogueComponent } from '../dilog/success-dialogue/success-dialogue.component';
import { ApiService } from '../service/api.service';
import { Stock } from '../stock';
import { StockDetails } from '../stockDetails';

@Component({
  selector: 'app-stock-details',
  templateUrl: './stock-details.component.html',
  styleUrls: ['./stock-details.component.css']
})
export class StockDetailsComponent implements OnInit{

 companyCode!: any;
 startDate!: any;
 endDate!: any ;

 stockResponse: StockDetails = new StockDetails;
 stocksList : Stock[]=[];

 stockAddForm : FormGroup = new FormGroup({
   stockPrice : new FormControl(null,Validators.required),
   companyCode : new FormControl(null, Validators.required) 
 });

constructor(private router : Router, private httpCleint : HttpClient, private apiService : ApiService,
  private route : ActivatedRoute, private toastr: ToastrService,private dialog : MatDialog){}

  ngOnInit(){

    this.route.paramMap.subscribe((req: ParamMap)=>{
       this.companyCode = req.get('companyCode');
       this.startDate = req.get('startDate');
       this.endDate = req.get('endDate');
    });

    return this.apiService.getStockByDate(this.companyCode,
      this.startDate,this.endDate).subscribe((response : any)=>{
           this.stockResponse.minStockPrice = response.minStockPrice;
           this.stockResponse.maxStockPrice = response.maxStockPrice;
           this.stockResponse.avgStockPrice = response.avgStockPrice;
           this.stockResponse.stocks = response.stocks;
           this.stocksList = this.stockResponse.stocks;
    });


  }

  add(){

     this.stockAddForm.setValue({stockPrice: this.stockAddForm.value.stockPrice, companyCode: this.companyCode});

     //const formData = new FormData();
     //formData.append('stockPrice',this.stockAddForm.value.stockPrice);
     //formData.append('companyCode',this.companyCode);

     return this.apiService.addStock(this.companyCode,this.stockAddForm.value.stockPrice).subscribe(
       (response)=>{
         this.showSuccess();
         //window.location.reload();
       },
       (error)=>{

         this.showError();
         //window.location.reload();
       }
       
       );
       //window.location.reload();
       this.stockAddForm.reset();
       
  }

  showSuccess(){
    //this.toastr.success('Stock Details Added Successfully!!!');
    this.dialog.open(SuccessDialogueComponent,
      { data  : {message: "Stock Details Added Successfully!!! "}
      });
  }

  showError(){
    //this.toastr.error('Something went wrong while adding Stocks!!!! Try Again Later !!!');
    this.dialog.open(ErrorDialogueComponent,
      { data  : {message: "Something went wrong while adding Stocks!!!! Try Again Later !!!"}
      });
   
  }


}
