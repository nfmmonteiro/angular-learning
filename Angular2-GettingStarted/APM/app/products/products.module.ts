import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { SharedModule } from '../shared/shared.module';

import { ProductListComponent } from './components/product-list.component';
import { ProductDetailComponent } from './components/product-detail.component';
import { ProductFilterPipe } from './product-filter.pipe';
import { ProductService } from './product.service';

import { ProductsRoutingModule } from './products-routing.module';

@NgModule({
    imports: [
        HttpModule,
        SharedModule,
        ProductsRoutingModule
    ],
    declarations: [
        ProductListComponent, 
        ProductDetailComponent, 
        ProductFilterPipe
    ],
    providers: [
        ProductService
    ]
})
export class ProductsModule {
}