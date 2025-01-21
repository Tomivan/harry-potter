import { Component } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrl: './characters.component.scss',
})
export class CharactersComponent {
  data: any = []

  constructor( private appService: AppService) {}

  ngOnInit(): void {
    this.getCharacters();
  }
  
 getCharacters(): void {
    this.appService.getAllCharacters().subscribe(
      (response: any) => {
        this.data = response;
      },
      (error: any) => {
        console.error('Error fetching characters:', error); // Handle errors
      }
    );
  }
}
