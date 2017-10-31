import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'favorite',  
  templateUrl: './favorite.component.html', 

   styles: [`
    .glyphicon {
      color: blue;}   
   `] ,
   styleUrls:['./favorite.component.css'] 
})
export class FavoriteComponent {
  
  //component input field alias
  @Input('is-favorite') isFavorite: boolean;
  //component output field alias
  @Output('change') click = new EventEmitter();
  favorite = "glyphicon glyphicon-star";


  onClick(){
    
    this.isFavorite = !this.isFavorite;
    
    this.click.emit({newValue: this.isFavorite});
    
  }
}
  export interface FavoriteChangedEventArgs{
    newValue: boolean
 
}
