import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ProductListComponent } from './components/product-list.component';
import { ProductDetailComponent } from './components/product-detail.component';
import { ProductDetailGuard } from './product-detail.guard';

@NgModule({
    imports: [
        RouterModule.forChild([
            { path: 'products', component: ProductListComponent },
            { path: 'products/:id', component: ProductDetailComponent, canActivate: [ ProductDetailGuard ]},
        ])
    ],
    providers: [
        ProductDetailGuard
    ],
    exports: [
        RouterModule
    ]
})
export class ProductsRoutingModule {
}