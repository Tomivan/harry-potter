import { Component } from '@angular/core';
import { AppService } from '../app.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-students',
  imports: [CommonModule],
  templateUrl: './students.component.html',
  styleUrl: './students.component.scss'
})
export class StudentsComponent {
  data:any = [];

  constructor(private appService:AppService) {}

  ngOnInit():void {
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
