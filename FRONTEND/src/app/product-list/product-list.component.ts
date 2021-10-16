import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Categorie } from '../categorie';
import { Product } from '../product';
import { ProductServiceService } from '../product-service.service';
import {map} from 'rxjs/operators';
import { Periode } from '../periode';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  constructor(private productService: ProductServiceService) { }

  catalogue$!: Observable<Array<Product>>;
  categories$!: Observable<Array<Categorie>>;
  periodes$!: Observable<Array<Periode>>;

  @Input() filterCategorie: string = "";
  @Input() filterPeriode: string = "";
  
  observerCatalogue: any;
  observerCategories: any;
  observerPeriodes: any;

  ngOnInit(): void {
    this.catalogue$ = this.productService.getCatalogue();
    
    if (this.observerCatalogue) {
      this.observerCatalogue.unsubscribe();
    }
    this.observerCatalogue = this.catalogue$.subscribe(
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

    this.categories$ = this.productService.getCategories();
    
    if (this.observerCategories) {
      this.observerCategories.unsubscribe();
    }
    this.observerCategories = this.categories$.subscribe(
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

    this.periodes$ = this.productService.getPeriodes();
    
    if (this.observerPeriodes) {
      this.observerPeriodes.unsubscribe();
    }
    this.observerPeriodes = this.categories$.subscribe(
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
    if (this.observerCatalogue) {
      this.observerCatalogue.unsubscribe();
    }
    if (this.observerCategories) {
      this.observerCategories.unsubscribe();
    }
    if (this.observerPeriodes) {
      this.observerPeriodes.unsubscribe();
    }
  }

  onApplyFilter() {
    if(this.filterCategorie != "" && this.filterPeriode != ""){
      this.catalogue$ = this.productService.getCatalogue().pipe(map(products => products.filter(prod => (prod.categorie === this.filterCategorie && prod.periode === this.filterPeriode))));
    }
    else if(this.filterCategorie != ""){
      this.catalogue$ = this.productService.getCatalogue().pipe(map(products => products.filter(prod => prod.categorie === this.filterCategorie)));
    }
    else if(this.filterPeriode != ""){
      this.catalogue$ = this.productService.getCatalogue().pipe(map(products => products.filter(prod => prod.periode === this.filterPeriode)));
    }
    else{
      this.catalogue$ = this.productService.getCatalogue();
    }
  }

}
