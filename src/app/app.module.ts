import { SummaryPipe } from './summary.pipe';
import { AuthorsService } from './authors/authors.service';
import { CoursesService } from './courses.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';
import { CourseComponent } from './course/course.component';
import { AuthorsComponent } from './authors/authors.component';
import {FormsModule} from '@angular/forms';
import { FavoriteComponent } from './favorite/favorite.component';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseComponent,
    AuthorsComponent,
    SummaryPipe,
    FavoriteComponent    
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
   CoursesService,
   AuthorsService 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
