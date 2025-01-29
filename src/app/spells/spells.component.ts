import { Component } from '@angular/core';
import { AppService } from '../app.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-spells',
  imports: [CommonModule],
  templateUrl: './spells.component.html',
  styleUrl: './spells.component.scss'
})
export class SpellsComponent {
  data:any = [];

  constructor(private appService: AppService) {}

  ngOnInit(): void {
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
