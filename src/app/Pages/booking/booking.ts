import { Component, inject, OnInit } from '@angular/core';
import { Bookingservice } from '../../service/bookingservice';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-booking',
  imports: [ReactiveFormsModule,DatePipe],
  templateUrl: './booking.html',
  styleUrl: './booking.css',
})
export class Booking implements OnInit {

  bookingsrv = inject(Bookingservice);
  carList: any[] = [];
  bookinList: any[] = []

 bookingForm: FormGroup = new FormGroup({
  CustomerName: new FormControl(""),
  CustomerCity: new FormControl(""),
  MobileNo: new FormControl(""),
  Email: new FormControl(""),
  BookingId: new FormControl(0),
  CarId: new FormControl(0),
  BookingDate: new FormControl(""),
  Discount: new FormControl(0),
  TotalBillAmount: new FormControl(0)
});




  ngOnInit(): void {

    this.getCarList();
    this.getAllBooking();
  }

  getCarList() {
    this.bookingsrv.getAllCars().subscribe(
      (res: any) => { this.carList = res.data; },
    );
  }

  getAllBooking() {
    this.bookingsrv.getAllBooking().subscribe(
      (res: any) => { this.bookinList = res.data; },
    );
  }

onSave() {
  const formvalue = this.bookingForm.value;
  this.bookingsrv.saveBooking(formvalue).subscribe ((res:any) =>{
    if(res.result) {
      alert ("booking done")
      this.getAllBooking();
    }else{ alert(res.message)
    }
  })
} 

}