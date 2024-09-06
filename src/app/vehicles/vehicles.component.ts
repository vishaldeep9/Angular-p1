import { VehiclesService } from './../vehicles.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css'],
})
export class VehiclesComponent {
  public vehicles: any = [];
  public term: string = '';
  public column: string = '';
  public order: string = '';
  public id: string = '';
  public totalVehicles: any = [];
  // constructor(private vehiclesService:VehiclesService){
  //   vehiclesService.getVehicles().subscribe(
  //     (data:any)=>{
  //       this.vehicles=data
  //     },
  //     (error:any)=>{
  //       alert("internal server error")
  //     }
  //   )
  // }
  constructor(private vehiclesService: VehiclesService, private route: Router) {
    vehiclesService.getVehicles().subscribe({
      next: (data: any) => {
        this.vehicles = data;
        this.totalVehicles = data;
      },
      error: (error: any) => {
        alert('Internal server error');
      },
      complete: () => {
        console.log('Vehicle data fetching completed');
      },
    });
  }

  filter() {
    this.vehiclesService.getFilteredVehicles(this.term).subscribe({
      next: (data) => {
        this.vehicles = data;
      },
      error: (error) => {
        alert('internal server error');
      },
      complete: () => {
        console.log('data has been fetched successfully');
      },
    });
  }
  sort() {
    this.vehiclesService.getSortedVehicles(this.column, this.order).subscribe(
      (data: any) => {
        this.vehicles = data;
      },
      (error: any) => {
        alert('internal server error');
      }
    );
  }
  delete(id: string) {
    this.vehiclesService.deleteVehicles(id).subscribe(
      (data) => {
        alert('deleted successfully');
        location.reload();
      },
      (error) => {
        alert('internal server error');
      }
    );
  }

  fetchedById() {
    // -------option-1 Refresh => is working
    //  if(!this.id){
    //   location.reload()
    //  }
    // ------Option-2 , is working
    if (!this.id) {
      // console.log(this.totalVehicles);
      this.vehicles = this.totalVehicles;
      return this.vehicles;
    }
    this.vehiclesService.getVehicleById(this.id).subscribe(
      (data: any) => {
        this.vehicles = [data];
      },
      (error: any) => {
        console.log('internal server error');
      }
    );
  }
  view(id: string) {
    this.route.navigateByUrl(`dashboard/view-vehicle/${id}`);
    console.log(id);
  }
  edit(id: string) {
    this.route.navigateByUrl(`dashboard/edit-vehicle/${id}`);
  }
}
