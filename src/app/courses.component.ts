
import { CoursesService } from './courses.service';

import{Component} from '@angular/core';

@Component({
    selector: 'courses',
    template: `       
    <input [(ngModel)] = "email" (keyup.enter)="onKeyUp()"/>
    <br/>
    <br/>
    <button class="btn btn-primary">Hello</button>     
    <br/>
    <br/>
    {{course.title | uppercase}}<br/>
    {{course.students | number}}<br/>
    {{course.rating | number: '2.1-1' }}<br/>
    {{course.price | currency:'USD':true: '3.2-2'}}<br/>
    {{course.releaseDate | date:'shortDate'}}<br/>
    <br/>
     {{ text | summary:20}}
        `
})


export class CoursesComponent{
    title = "List of courses";
    courses; 
   
    constructor(service: CoursesService, ){
       this.courses = service.getCourses();       
    }

    email = "example@cox.net";

    onKeyUp(){
       console.log(this.email);
    }

    text= `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`;
   
    course ={
        title: "The Complete Angular Course",
        rating: 4.9745,
        students: 30123,
        price:190.95,
        releaseDate: new Date(2016, 3, 1)
    }
}