import { Time } from "@angular/common";

export class Stock {
    id!: string;
    stockId!: number;
    companyCode!: string;
    stockPrice!: number;
    stockStartDate!: Date;
    stockEndDate!: Date;
    stockStartTime!: Time;
    stockEndTime!: Time
}
