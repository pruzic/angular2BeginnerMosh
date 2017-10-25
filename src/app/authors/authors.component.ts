import { AuthorsService } from '././authors.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
  // ,template: `
  //     <h2>{{authorsTitle}}</h2>
  //     <ul>
  //         <li *ngFor="let author of authors">
  //             {{author}}
  //         </li>
  //     </ul>
  //   `
})
export class AuthorsComponent implements OnInit {

  authorsTitle = "Authors";
  authors;

  constructor(service: AuthorsService) { 
    this.authors = service.getAuthors();
  }

  ngOnInit() {
  }

}
