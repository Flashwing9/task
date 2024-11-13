import {
  Component,
  DestroyRef,
  Inject,
  inject,
  OnInit,
  signal,
} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Item } from '../item.model';
import { CommonModule } from '@angular/common';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-products-list',
  standalone: true,
  imports: [],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.scss',
})
export class ProductsListComponent implements OnInit {
  public data: any;
  items: any[] = [];

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
}
