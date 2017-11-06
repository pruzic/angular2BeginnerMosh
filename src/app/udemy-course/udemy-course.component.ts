import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'udemy-course',
  templateUrl: './udemy-course.component.html',
  styleUrls: ['./udemy-course.component.css']
})
export class UdemyCourseComponent{

  categories =[
    {id: 1, name:"Development"},
    {id: 2, name: "Art"},
    {id: 3, name: "Languages"}
  ]

 log(x){
   console.log(x);
 }

 create(f){
   console.log(f);
 }

}
