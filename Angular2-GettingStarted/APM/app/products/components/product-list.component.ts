import { Component, OnInit, OnChanges, OnDestroy } from '@angular/core';
import { ProductService } from '../product.service';
import { IProduct } from '../iproduct';

@Component({
    moduleId: module.id,
    templateUrl: 'product-list.component.html',
    styleUrls: ['product-list.component.css']
})
export class ProductListComponent implements OnInit {
    
    pageTitle: string;
    products: Array<IProduct>;
    imageWith: number = 50;
    imageMargin: number = 2;
    imagesVisible: boolean = false;
    listFilter: string = '';
    errorMessage: string;

    constructor(private _productService: ProductService) {
        //console.log('ProductListComponent.constructor');

        //Important: it does not work if we don't add these two lines that bind the handler functions to the right context!
        this.handleProductsSuccess = this.handleProductsSuccess.bind(this);
        this.handleProductsFailure = this.handleProductsFailure.bind(this);
    }

    ngOnInit(): void {
        //console.log('ProductListComponent.onInit');
        this.updatePageTitle();
        this._productService.getProducts()
                            .subscribe(this.handleProductsSuccess, this.handleProductsFailure);
    }

    private handleProductsSuccess(products: Array<IProduct>): void {
        this.products = products;
    }

    private handleProductsFailure(error: string): void {
        this.errorMessage = error;
    }

    toggleImages(): void {
        this.imagesVisible = !this.imagesVisible;
    }

    onRatingClick($event:any): void {
        this.updatePageTitle($event.message);
    }

    private updatePageTitle(message?: string): void {
        let baseTitle = 'Product List';
        this.pageTitle = (message ? `${baseTitle}: ${message}` : baseTitle);
    }
};