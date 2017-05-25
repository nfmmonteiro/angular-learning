import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { IProduct } from './iproduct';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/find';
import 'rxjs/add/observable/throw';

@Injectable()
export class ProductService {

    private productsUrl: string = '/api/products/products.json';

    constructor(private _http: Http) {
    }

    handleError(error: Response) {
        return Observable.throw('Error getting products from server!');
    }

    getProducts(): Observable<IProduct[]> {
        return this._http.get(this.productsUrl)
            //.do((response: Response) => console.log('Products response: ', response))
            .catch(this.handleError)
            .map((response: Response) => <IProduct[]> response.json());
    }

    getProduct(productId: number): Observable<IProduct> {
        return this.getProducts()
            .map((products: IProduct[]) => {
                return products.find((product: IProduct) => product.productId === productId);
            });
    }
}