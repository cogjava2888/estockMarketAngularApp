import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'my-e-stock-app';

  constructor(private router : Router){

  }

  ngOnInit() : void{

  }

  companySearchForm : FormGroup = new FormGroup({
      companyCode : new FormControl(null , Validators.required)
  });

  appComponentForm : FormGroup = new FormGroup({});

  registerCompany(){
    this.router.navigateByUrl('registerCompany');
  }

  listAll(){
    this.router.navigateByUrl('getAllCompany');
  }

  search(){
    this.router.navigateByUrl('getByCompanyCode/' + this.companySearchForm.value.companyCode);
    this.companySearchForm.reset();
    this.appComponentForm.reset();
  }

  

}
