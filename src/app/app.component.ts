
import { FavoriteChangedEventArgs } from './favorite/favorite.component';
import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // title:string;  
  // post={
  //   title: "Title",
  //   isFavorite: true
  // }

  // onFavoriteChanged(eventArgs: FavoriteChangedEventArgs){
  //   console.log(eventArgs);
  // }

  // tweet={
  //   body: 'Here is the body of a tweet...',
  //   isLiked: true,
  //   likesCount: 10
  // }

  //courses = [1,2];

  //viewMode = 'something else';

  courses ;

onAdd(){
  this.courses.push({Id: 4, Name:"course4"});
}

onRemove(course){
  let index = this.courses.indexOf(course);
  this.courses.splice(index, 1);
}

loadCourses(){
 this.courses = [
  {"Id": 1, "Name": "course1"},
  {"Id": 2, "Name": "course2"},
  {"Id": 3, "Name": "course3"}  
];

}

trackCourse(index, course){
  return course ? course.id : undefined;
}

onChange(course){
  course.Name = "UPDATED";
}

}
