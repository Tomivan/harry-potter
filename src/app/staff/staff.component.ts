import { Component } from '@angular/core';
import { AppService } from '../app.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-staff',
  imports: [CommonModule],
  templateUrl: './staff.component.html',
  styleUrl: './staff.component.scss'
})
export class StaffComponent {
  data:any = []

  constructor(private appService: AppService) {}

  ngOnInit(): void {
    this.getStaff();
  }

  getStaff(): void {
    this.appService.getAllStaff().subscribe(
      (response: any) => {
        this.data = response;
      },
      (error: any) => {
        console.error('Error fetching characters:', error); // Handle errors
      }
    );
  }

}
