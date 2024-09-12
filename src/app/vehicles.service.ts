import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class VehiclesService {
      
 constructor(private httpClient: HttpClient) {}
  getVehicles(): Observable<any> {
    return this.httpClient.get(
      '/assets/vehicles.json'
    );
  }
  // https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction
  getVehicleBy(id:string): Observable<any> {
    return this.httpClient.get(
      `https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction/${id}`
    );
  }
  getFilteredVehicles(term: string): Observable<any> {
    return this.httpClient.get(
      'https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction?filter=' +
        term
    );
  }
  getSortedVehicles(column:string,order:string):Observable<any>
  {
    return this.httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction?sortBy="+column+"&order="+order)
  }
  getVehicleById(id: string):Observable<any>
   {
  return this.httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction/"+id)
  }
  deleteVehicles(id:string):Observable<any>
  {
    return this.httpClient.delete(`https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction/${id}`)
  }
  createVehicles(data:any):Observable<any>
  {
    return this.httpClient.post("https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction",data)
  }
  updateVehicle(data:any,id:string):Observable<any>
  {
    return this.httpClient.put(`https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction/${id}`,data)
  }
}
