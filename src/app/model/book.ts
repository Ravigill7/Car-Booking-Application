export interface bookModel {
    customerName: string
    customerCity: string
    mobileNo: string
    email: string
    bookingId: number
    carId: number
    bookingDate: string
    discount: number
    totalBillAmount: number
}

export interface APIResponse {
    message: string
    result: boolean
    data: any
}


