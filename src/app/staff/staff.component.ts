import { Component } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-staff',
  standalone: false,
  templateUrl: './staff.component.html',
  styleUrl: './staff.component.scss'
})
export class StaffComponent {
  data:any = []

  constructor(private appService: AppService) {}

  ngOnInIt(): void {
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
