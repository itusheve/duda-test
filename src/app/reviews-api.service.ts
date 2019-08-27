import { Injectable } from '@angular/core';
import {Review} from "./review";
import {Subject} from "rxjs";
import * as imgGen from '@dudadev/random-img';

@Injectable({
  providedIn: 'root'
})
export class ReviewsApiService {

  private reviews:Array<Review> = new Array<Review>();

  private REVIEWS_STORAGE_KEY : string= 'reviews';

  constructor() {
    this.reviews = this.getFromLocalStorage() || [];

  }

  getReviews(){
    return this.reviews;
  }

  getFromLocalStorage(){
    return JSON.parse(localStorage.getItem(this.REVIEWS_STORAGE_KEY));
  }

  saveToLocalStorage(){
    localStorage.setItem(this.REVIEWS_STORAGE_KEY,JSON.stringify(this.reviews));
  }

  updateReview(review:Review){
  this.reviews.findIndex(el => el.id === review.id);
  }

  deleteReview(id:number){

    this.reviews.splice( this.reviews.findIndex(review => review.id === id),1);
    this.saveToLocalStorage();
  }

  insertReview(review: Review){

    imgGen().then(avatarUrl => {
      this.reviews.push(Object.assign(review, {id : this.reviews.length, image:avatarUrl}));
      this.saveToLocalStorage();
    });


  }

}
