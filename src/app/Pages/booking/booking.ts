import { Component, inject } from '@angular/core';
import { Bookingservice } from '../../service/bookingservice';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-booking',
  imports: [],
  templateUrl: './booking.html',
  styleUrl: './booking.css',
})
export class Booking {

bookingsrv = inject(Bookingservice)
bookingForm: FormGroup = new FormGroup ({
CustomerName: new FormControl (""),
CustomerCity: new FormControl (""),
MobileNo: new FormControl (""),
Email: new FormControl (""),
BookingId: new FormControl (""),
CarId: new FormControl (""),
Discount: new FormControl (""),
TotalBillAmount: new FormControl ("")
})

}
