import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../product';
import { ProductServiceService } from '../product-service.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  constructor(private productService: ProductServiceService) { }

  catalogue$!: Observable<Array<Product>>;

  observer: any;

  ngOnInit(): void {
    this.catalogue$ = this.productService.getCatalogue();
    
    if (this.observer) {
      this.observer.unsubscribe();
    }
    this.observer = this.catalogue$.subscribe(
      (value) => {
        console.log(value);
      },
      (error) => {
        console.log(error);
      },
      () => {
        console.log('Fini');
      }
    );
  }

  ngOnDestroy() {
    if (this.observer) {
      this.observer.unsubscribe();
    }
  }

}
