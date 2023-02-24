import  { Stock } from "./stock";


export class StockDetails {

    stocks: Stock[] =[];
    minStockPrice!: number;
    maxStockPrice!: number;
    avgStockPrice!: number;
}
