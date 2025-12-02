import { Component, inject, OnInit } from '@angular/core';
import { Bookingservice } from '../../service/bookingservice';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-booking',
  imports: [ReactiveFormsModule],
  templateUrl: './booking.html',
  styleUrl: './booking.css',
})
export class Booking implements OnInit {

  bookingsrv = inject(Bookingservice);
  carList: any[] = [];
  bookinList: any[] = []

  bookingForm: FormGroup = new FormGroup({
    customerName: new FormControl(""),
    customerCity: new FormControl(""),
    mobileNo: new FormControl(""),
    email: new FormControl(""),
    bookingId: new FormControl(""),
    carId: new FormControl(""),
    bookingDate: new FormControl(""),
    discount: new FormControl(""),
    totalBillAmount: new FormControl("")
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

}
