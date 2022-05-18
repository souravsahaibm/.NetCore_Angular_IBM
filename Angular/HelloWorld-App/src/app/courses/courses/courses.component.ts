import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  // template:'{{onTitle()}}',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  constructor() { }

  title = 'List of Courses';

  onTitle() {
    return this.title;
  }
  courses = ["course 1", "course 2", "course 3"];
  ngOnInit(): void {
  }

}
