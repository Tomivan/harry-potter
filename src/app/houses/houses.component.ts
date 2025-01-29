import { Component } from '@angular/core';
import { AppService } from '../app.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-houses',
  imports: [CommonModule],
  templateUrl: './houses.component.html',
  styleUrl: './houses.component.scss'
})
export class HousesComponent {
  gryffindorData:any = [];
  slytherinData:any = [];
  hufflepuffData:any = [];
  ravenclawData:any = [];

  constructor(private appService: AppService) {}

  ngOnInit(): void {
    this.getSlytherinStudents();
    this.getGryffindorStudents();
    this.getHufflepuffStudents();
    this.getRavenclawStudents();
  }

  getGryffindorStudents(): void {
    this.appService.getAllStudentsInGriffindor().subscribe(
      (response: any) => {
        this.gryffindorData = response;
      },
      (error: any) => {
        console.error('Error fetching characters:', error); // Handle errors
      }
    );
  }

  getSlytherinStudents(): void {
    this.appService.getAllStudentsInSlytherin().subscribe(
      (response: any) => {
        this.slytherinData = response;
      },
      (error: any) => {
        console.error('Error fetching characters:', error); // Handle errors
      }
    );
  }

  getRavenclawStudents(): void {
    this.appService.getAllStudentsInRavenclaw().subscribe(
      (response: any) => {
        this.ravenclawData = response;
      },
      (error: any) => {
        console.error('Error fetching characters:', error); // Handle errors
      }
    );
  }

  getHufflepuffStudents(): void {
    this.appService.getAllStudentsInHufflepuff().subscribe(
      (response: any) => {
        this.hufflepuffData = response;
      },
      (error: any) => {
        console.error('Error fetching characters:', error); // Handle errors
      }
    );
  }

}
