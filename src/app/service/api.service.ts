import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Company } from '../company';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  //LOCAL URLs
  //companyUrl = "http://localhost:8000/company";
  //stockUrl = "http://localhost:8000/stock";

  //Azure container insrance url not used anymore.
  //companyUrl = "https://company-230221173746.azurewebsites.net/api/v1.0/market/company/";
  //stockUrl = "https://stock-230221232356.azurewebsites.net/api/v1.0/market/stock";

  
  //AZURE hosted URLs
  companyUrl = "https://companycontainerapp.wittyforest-7bb752ce.eastus.azurecontainerapps.io/api/v1.0/market/company";  
  stockUrl = "https://stockcontainerapp.wittyforest-7bb752ce.eastus.azurecontainerapps.io/api/v1.0/market/stock";

  registerSuccess: boolean = false;
  companyResponse: Company = new Company;
  companyResponceList: Company[] = new Array;



  constructor(private httpClient : HttpClient) { }


  //GET, POST & DELETE COMPANY APIs

postCompany(companyRequest : any){

  let headers = new HttpHeaders()
  headers=headers.append('content-type','application/json')
  headers=headers.append('Access-Control-Allow-Origin', '*')

  return this.httpClient.post(this.companyUrl+ '/register',companyRequest,{'headers':headers,responseType:'text'});
  
}

getAllCompany(){
  let headers = new HttpHeaders()
  headers=headers.append('content-type','application/json')
  headers=headers.append('Access-Control-Allow-Origin', '*')

  return this.httpClient.get(this.companyUrl + '/getall',{'headers':headers});
}

getByCompanyCode(companyCode: string){
  let headers = new HttpHeaders()
  headers=headers.append('content-type','application/json')
  headers=headers.append('Access-Control-Allow-Origin', '*')

   return this.httpClient.get(this.companyUrl + '/info/' + companyCode,{'headers':headers});
}

deleteCompany(companyCode : string){
  let headers = new HttpHeaders()
  headers=headers.append('content-type','application/json')
  headers=headers.append('Access-Control-Allow-Origin', '*')

   return this.httpClient.delete(this.companyUrl + '/delete/' + companyCode,{'headers':headers});
}


//GET & POST STOCKS APIs

getStockByDate(companyCode: string, startDate : Date, endDate : Date){
  let headers = new HttpHeaders()
  headers=headers.append('content-type','application/json')
  headers=headers.append('Access-Control-Allow-Origin', '*')

   return this.httpClient.get(this.stockUrl+ '/get/' + companyCode + '/' + startDate + '/' + endDate,{'headers':headers});
}


addStock(companyCode : string, formData : string){
  let headers = new HttpHeaders()
  headers=headers.append('content-type','application/json')
  headers=headers.append('Access-Control-Allow-Origin', '*')

  return this.httpClient.post(this.stockUrl + '/add/' + companyCode , formData,{'headers':headers,responseType:'text'});
}


}