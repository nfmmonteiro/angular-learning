import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription }       from 'rxjs/Subscription';
import { IProduct } from '../iproduct';
import { ProductService } from '../product.service';

@Component({
    moduleId: module.id,
    templateUrl: 'product-detail.component.html',
    styleUrls: ['product-detail.component.css']
})
export class ProductDetailComponent implements OnInit, OnDestroy {
    pageTitle: string
    product: IProduct;
    private sub: Subscription;

    constructor(private _route: ActivatedRoute,
                private _router: Router,
                private _productService: ProductService) {
    }

    ngOnInit(): void {
        this.updatePageTitle();
        this.getProduct(+this._route.snapshot.params.id);
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    getProduct(id: number) {
        this.sub = this._productService.getProduct(id)
        .subscribe((product: IProduct) => {
            if (product) {
                this.product = product;
            } else {
                this.updatePageTitle(`Cannot find a product with a matching id!`);
            }
        }, (error:any) => {
            this.updatePageTitle(error)
        });
    }

    onBack(): void {
        this._router.navigate(['/products']);
    }

    onRatingClicked($event: any): void {
        this.updatePageTitle($event.message);
    }

    private updatePageTitle(message?: string): void {
        let baseTitle = 'Product Detail';
        this.pageTitle = (message ? `${baseTitle}: ${message}` : baseTitle);
    }
}
