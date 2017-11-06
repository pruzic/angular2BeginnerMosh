import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent{

//component input field alias
@Input('isActive') isLiked: boolean;
@Input('likesCount') likesCount: number;


  onClick(){  
    this.likesCount += this.isLiked ? -1 : 1;
    this.isLiked = !this.isLiked;

  }
}
