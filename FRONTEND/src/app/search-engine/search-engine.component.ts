import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Categorie } from '../categorie';
import { ProductServiceService } from '../product-service.service';

@Component({
  selector: 'app-search-engine',
  templateUrl: './search-engine.component.html',
  styleUrls: ['./search-engine.component.scss']
})
export class SearchEngineComponent implements OnInit {

  constructor(private productService: ProductServiceService) { }

  categories$!: Observable<Array<Categorie>>;
  observer: any;

  ngOnInit(): void {
    this.categories$ = this.productService.getCategories();
    
    if (this.observer) {
      this.observer.unsubscribe();
    }
    this.observer = this.categories$.subscribe(
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

  onApplyFilter() {
    
  }

}
