import { CoursesService } from './courses.service';
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

let courseService: CoursesService, httpTestController: HttpTestingController;

beforeEach(() => {
  TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: [
    CoursesService,

    ]
  });
  courseService = TestBed.get(CoursesService);
  httpTestController = TestBed.get(HttpClientTestingModule);
});

describe('CourseService', () => {


  it('should retrive all courses', () => {

  } );

});
