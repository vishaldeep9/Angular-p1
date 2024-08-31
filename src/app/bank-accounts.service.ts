import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, count } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BankAccountsService {
  constructor(private httpClient:HttpClient) { }
  public baseUrl="https://6128991386a213001729f9df.mockapi.io/test/v1/principals";

  getAccountsDetails():Observable<any>
  {
    return this.httpClient.get(this.baseUrl)
  }
  getFilteredAccounts(term:string):Observable<any>
  {
    return this.httpClient.get(this.baseUrl+"?filter="+term)
  
  }
  
  getPaginationAccounts(count:number,page:number):Observable<any>
  {
    return this.httpClient.get(this.baseUrl+`?limit=${count}&page=${page}`)
  }
  createBankAccount(data:any):Observable<any>
  {
    console.warn(data);
    
   return this.httpClient.post(this.baseUrl,data)
  }
  nextPage(count:number,page:number){
    console.log()
    return this.httpClient.get(this.baseUrl+`?limit=${count}&page=${page}`)
  }
  getAccountsDetailById(id:string):Observable<any>
  {
    return this.httpClient.get(this.baseUrl+`/${id}`)
  }
  updateBankAccount(data: any, id: string) {
    console.log(data);
    return this.httpClient.put(this.baseUrl+`/${id}`,data)
  }
}
