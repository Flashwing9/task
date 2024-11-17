import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-products-list',
  standalone: true,
  imports: [],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.scss',
})
export class ProductsListComponent implements OnInit {
  public data: any;
  public jelweleryData: any;
  public womensClothingData: any;
  public mensClothingData: any;
  public jeweleryData: any;
  public electronicsData: any;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchItems();
  }

  public fetchItems() {
    this.http
      .get<any[]>('https://fakestoreapi.com/products')
      .subscribe((res: any) => {
        this.data = res;
      });
  }

  // public fetchItemsbyCategory(buttonNumber: number) {
  //   this.http
  //     .get<any[]>('https://fakestoreapi.com/products/category/jewelery')
  //     .subscribe((res: any) => {
  //       this.jelweleryData = res;
  //       console.log('working jewelery category');
  //     });
  // }

  currentFilter: number = 0;

  // showItems(buttonNumber: number): void {
  //   this.currentFilter = buttonNumber;
  //   if (buttonNumber === 3) {
  //     this.http
  //       .get<any[]>('https://fakestoreapi.com/products/category/jewelery')
  //       .subscribe((res: any) => {
  //         this.jelweleryData = res;
  //         // console.log(res);
  //       });
  //   }
  // }

  showItems(buttonNumber: number): void {
    this.currentFilter = buttonNumber;
    if (buttonNumber === 1) {
      this.http
        .get<any[]>(
          `https://fakestoreapi.com/products/category/women's clothing`
        )
        .subscribe((res: any) => {
          this.womensClothingData = res;
          // console.log(res);
        });
    } else if (buttonNumber === 2) {
      this.http
        .get<any[]>(`https://fakestoreapi.com/products/category/men's clothing`)
        .subscribe((res: any) => {
          this.mensClothingData = res;
          // console.log(res);
        });
    } else if (buttonNumber === 3) {
      this.http
        .get<any[]>('https://fakestoreapi.com/products/category/jewelery')
        .subscribe((res: any) => {
          this.jeweleryData = res;
          console.log(res);
        });
    } else if (buttonNumber === 4) {
      this.http
        .get<any[]>('https://fakestoreapi.com/products/category/electronics')
        .subscribe((res: any) => {
          this.electronicsData = res;
          console.log(res);
        });
    }
  }
}
