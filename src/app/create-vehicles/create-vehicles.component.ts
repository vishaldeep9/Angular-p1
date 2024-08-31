import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { VehiclesService } from '../vehicles.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-vehicles',
  templateUrl: './create-vehicles.component.html',
  styleUrls: ['./create-vehicles.component.css'],
})
export class CreateVehiclesComponent {
  public vehicleForm: FormGroup = new FormGroup({
    Vehicle: new FormControl(),
    manufacturer: new FormControl(),
    model: new FormControl(),
    type: new FormControl(),
    fuel: new FormControl(),
    color: new FormControl(),
    image: new FormControl(),
    cost: new FormControl(),
  });
  // isCreated:boolean=true
  public id:string="";
  constructor(private vehiclesService:VehiclesService,private activatedRoute:ActivatedRoute,private vehicleService:VehiclesService){}
  ngOnInit(){
    this.activatedRoute.params.subscribe((data:any)=>{
      //after / data will show of url 
      console.log(data.id)
      // we are setting coming id to this.id
      this.id=data.id;
      this.vehicleService.getVehicleById(data.id).subscribe((data)=>{
        // putting already existing of form inside this updated form 
        this.vehicleForm.patchValue(data)
      })
    })
  }
  create() {
    if(this.id){
      // updating ==========
      this.vehicleService.updateVehicle(this.vehicleForm.value,this.id).subscribe((result)=>{
        alert("updated successfully")
        this.vehicleForm.reset();
        // this.isCreated=false
      },
    (error)=>{
      alert("updation failed ")
    })

    }
    else {
      // ======creating new one 
      // console.log(this.vehicleForm.value)
    this.vehiclesService.createVehicles(this.vehicleForm.value).subscribe((result)=>{
      alert("successfully new vehicle object added")
      this.vehicleForm.reset()
    }),
    (error:any)=>{
      console.log(error)
    }
    }
    }

}
