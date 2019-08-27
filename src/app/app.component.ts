import {Component, OnInit} from '@angular/core';
import {ReviewsApiService} from "./reviews-api.service";
import {Review} from "./review";
import {Subject} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'duda-project';

  private newReview:Review = {} as Review;

  private  reviews : Array<Review>;

  constructor(private reviewsApiService:ReviewsApiService){
    this.reviews = this.reviewsApiService.getReviews();

  }



  addReview(){
    this.reviewsApiService.insertReview(this.newReview);
    this.newReview = {} as Review;
  }
}
