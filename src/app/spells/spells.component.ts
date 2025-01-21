import { Component } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-spells',
  standalone: false,
  templateUrl: './spells.component.html',
  styleUrl: './spells.component.scss'
})
export class SpellsComponent {
  data:any = [];

  constructor(private appService: AppService) {}

  ngOnInIt(): void {
    this.getSpells()
  }

  getSpells(): void {
    this.appService.getAllSpells().subscribe(
      (response: any) => {
        this.data = response;
      },
      (error: any) => {
        console.error('Error fetching characters:', error); // Handle errors
      }
    );
  }

}
