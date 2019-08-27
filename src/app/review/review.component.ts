import {Component, Input, OnInit} from '@angular/core';
import {Review} from "../review";
import {ReviewsApiService} from "../reviews-api.service";


@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {

  @Input()
  private review:Review;

  constructor(private reviewsApiService:ReviewsApiService) { }



  ngOnInit() {

  }

  edit(){

  }

  delete(){
    this.reviewsApiService.deleteReview(this.review.id);
  }


}
