import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { ProductService } from './product.service';
import { IProduct } from './iproduct';

@Injectable()
export class ProductDetailGuard implements CanActivate {
    
    constructor(private _router:Router,
                private _productService: ProductService) {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        let productId = +route.params.id;
        if (isNaN(productId) || productId < 1) {
            console.error('Invalid product id!');
            this._router.navigate(['/products']);
            return false;
        }
        return true;
    }
}