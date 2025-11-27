import { Component, inject, OnInit } from '@angular/core';
import { APIResponse, carsModel } from '../../model/cars';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-vehicle',
  imports: [FormsModule],
  templateUrl: './vehicle.html',
  styleUrl: './vehicle.css',
})
export class Vehicle implements OnInit {

  newCarObj: carsModel;
  http = inject(HttpClient)
  carList: carsModel[] = [];


  constructor() {
    this.newCarObj = new carsModel();
  }

  ngOnInit(): void {
    this.getAllCars();
  }

  getAllCars() {
    this.http.get<APIResponse>("https://freeapi.miniprojectideas.com/api/CarRentalApp/GetCars").subscribe((res: APIResponse) => {
      this.carList = res.data
    })
  }

  onSaveCar() {
    this.http.post<APIResponse>("https://freeapi.miniprojectideas.com/api/CarRentalApp/CreateNewCar", this.newCarObj).subscribe((res: APIResponse) => {
      if (res.result) {
        alert("Your car has entered the system")
      }
      else {
        alert(res.message)
      }
    })
  }

  onUpdateCar() {
    this.http.put<APIResponse>("https://freeapi.miniprojectideas.com/api/CarRentalApp/UpdateCar", this.newCarObj).subscribe((res: APIResponse) => {
      if (res.result) {
        alert("Your car has updated in the system")
      }
      else {
        alert(res.message)
      }
    })
  }

  onDeleteByCarId(id: number) {
    this.http.delete<APIResponse>("https://freeapi.miniprojectideas.com/api/CarRentalApp/DeleteCarbyCarId" + id
    ).subscribe((res: APIResponse) => {
      if (res.result) {
        alert("Your car has deleted from the system")
      }
      else {
        alert(res.message)
      }
    })
  }

  onEdit(data: carsModel) {
    this.newCarObj = data;
  }
}
