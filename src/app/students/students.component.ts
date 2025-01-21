import { Component } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-students',
  standalone: false,
  templateUrl: './students.component.html',
  styleUrl: './students.component.scss'
})
export class StudentsComponent {
  data:any = [];

  constructor(private appService:AppService) {}

  ngOnInIt():void {
    this.getStudents();
  }

  getStudents(): void {
    this.appService.getAllStudents().subscribe(
      (response: any) => {
        this.data = response;
      },
      (error: any) => {
        console.error('Error fetching characters:', error); // Handle errors
      }
    );
  }

}
