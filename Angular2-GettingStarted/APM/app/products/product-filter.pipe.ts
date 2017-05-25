import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from './iproduct';

@Pipe({
    name: 'productFilter'
})
export class ProductFilterPipe implements PipeTransform {

    transform(products: IProduct[], filterBy: string): IProduct[] {
        return products.filter((product: IProduct) => {
            let productDescription = `${product.productName}${product.productCode}`;
            return productDescription.toLowerCase().indexOf(filterBy.toLowerCase()) != -1;
        });
    }
}