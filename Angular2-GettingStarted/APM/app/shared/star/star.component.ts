import { Component, OnInit, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'ai-star',
    templateUrl: 'star.component.html',
    styleUrls: ['star.component.css']
})
export class StarComponent implements OnInit, OnChanges {
    private maxStars: number = 5;
    private starWidth:number = 14;
    ratingWidth:number = 0;
    
    @Input() rating:number;
    @Input() productId:number;
    @Output() ratingClick:EventEmitter<any> = new EventEmitter<any>();
    
    maxStarsWidth:number = this.maxStars * this.starWidth;
    stars:any[] = new Array(this.maxStars);

    ngOnInit(): void {
        //console.log('StarComponent.ngOnInit');
    }

    ngOnChanges(changes: SimpleChanges): void {
        //console.log('StarComponent.ngOnChanges');
        this.setRatingWidth();
    }

    onRatingClick() {
        this.ratingClick.emit({
            type: 'STAR_CLICKED',
            productId: this.productId,
            message: `The rating of product ${this.productId} was clicked!`
        });
    }

    private setRatingWidth() {
        this.ratingWidth = (this.rating  / this.maxStars * this.maxStarsWidth);
    }
}