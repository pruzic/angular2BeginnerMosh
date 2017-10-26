import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'favorite'
 
  ,template:`
 
  <div (click)="onClick();">
    <span [class]="favorite"></span>
  </div>

  `
})
export class FavoriteComponent implements OnInit {

  fullStar = "glyphicon glyphicon-star";
  emptyStar = "glyphicon glyphicon-star-empty";
  isFavorite = true;

  favorite = "glyphicon glyphicon-star";

  constructor() {

   }

  ngOnInit() {
  }

  onClick(){
    this.favorite = "";

    this.isFavorite = !this.isFavorite;
    
    this.favorite = (this.isFavorite) ? this.fullStar : this.emptyStar;

  }
}
