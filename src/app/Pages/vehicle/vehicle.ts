import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { APIResponse, carsModel } from '../../model/cars';

@Component({
  selector: 'app-vehicle',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './vehicle.html',
  styleUrls: ['./vehicle.css'],
})
export class Vehicle implements OnInit {
  newCarObj: carsModel = new carsModel();
  http = inject(HttpClient);
  carList: carsModel[] = [];

  constructor() {
    this.newCarObj = new carsModel();
  }

  ngOnInit(): void {
    this.getAllCars();
  }

  getAllCars() {
    this.http.get<APIResponse>("/api/CarRentalApp/GetCars").subscribe({
      next: (res: APIResponse) => {
        this.carList = res.data as carsModel[];
      },
      error: (error) => {
        console.error('Error fetching cars:', error);
        alert('Error loading cars');
      }
    });
  }

  onSaveCar() {
    this.http.post<APIResponse>("/api/CarRentalApp/CreateNewCar", this.newCarObj).subscribe({
      next: (res: APIResponse) => {
        if (res.result) {
          alert("Your car has entered the system");
          this.resetForm();
          this.getAllCars();
        } else {
          alert(res.message || 'Save failed');
        }
      },
      error: (error) => {
        console.error('Save error:', error);
        alert('Save failed');
      }
    });
  }

  onUpdateCar() {
    this.http.put<APIResponse>("/api/CarRentalApp/UpdateCar", this.newCarObj).subscribe({
      next: (res: APIResponse) => {
        if (res.result) {
          alert("Your car has updated in the system");
          this.resetForm();
          this.getAllCars();
        } else {
          alert(res.message || 'Update failed');
        }
      },
      error: (error) => {
        console.error('Update error:', error);
        alert('Update failed');
      }
    });
  }

onDeleteByCarId(id: number) {
  if (confirm('Are you sure?')) {
    this.http.delete<APIResponse>(`/api/CarRentalApp/DeleteCarbyCarId?carid=${id}`).subscribe({
      next: (res: APIResponse) => {
        if (res.result) {
          alert("Your car has deleted from the system");
          this.getAllCars(); 
        } else {
          alert(res.message || 'Delete failed');
        }
      },
      error: (error) => {
        console.error('Delete error:', error);
        alert('Delete failed');
      }
    });
  }
}



  onEdit(data: carsModel) {
    this.newCarObj = { ...data };
  }

  resetForm() {
    this.newCarObj = new carsModel();
  }
}
