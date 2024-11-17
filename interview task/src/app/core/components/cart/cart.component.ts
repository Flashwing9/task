import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
})
export class CartComponent {
  public data: any;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchItems();
  }

  public fetchItems() {
    this.http
      .get<any[]>('https://fakestoreapi.com/carts/user/1')
      .subscribe((res: any) => {
        this.data = res;
        console.log(res);
      });
  }
}
