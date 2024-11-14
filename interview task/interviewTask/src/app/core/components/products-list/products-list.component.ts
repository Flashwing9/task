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

  public fetchItemsbyCategory() {
    this.http
      .get<any[]>('https://fakestoreapi.com/products/category/jewelery')
      .subscribe((res: any) => {
        this.jelweleryData = res;
        console.log('working jewelery category');
      });
  }

  currentFilter: number = 0;

  showItems(buttonNumber: number): void {
    this.currentFilter = buttonNumber;
  }
}
