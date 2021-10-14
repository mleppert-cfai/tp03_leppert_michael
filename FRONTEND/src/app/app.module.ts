import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ClientFormComponent } from './client-form/client-form.component';
import { ClientFormRecapComponent } from './client-form-recap/client-form-recap.component';
import { PhoneFormatPipe } from './phone-format.pipe';
import { InvalidInputDirective } from './invalid-input.directive';
import { ProductListComponent } from './product-list/product-list.component';
import { SearchEngineComponent } from './search-engine/search-engine.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ClientFormComponent,
    ClientFormRecapComponent,
    PhoneFormatPipe,
    InvalidInputDirective,
    ProductListComponent,
    SearchEngineComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    RouterModule.forRoot([
      {path: 'client-form', component: ClientFormComponent},
      {path: 'product-list', component: ProductListComponent},
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
