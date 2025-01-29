import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppService } from '../app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrl: './characters.component.scss',
  imports: [CommonModule]
})
export class CharactersComponent {
  data: any = []

  constructor( 
    private appService: AppService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getCharacters();
  }
  
 getCharacters(): void {
    this.appService.getAllCharacters().subscribe(
      (response: any) => {
        console.log(response)
        this.data = response;
      },
      (error: any) => {
        console.error('Error fetching characters:', error); // Handle errors
      }
    );
  }
  viewCharacterInfo(id:string) {
    this.router.navigate(['/characters', id])
  }
}
