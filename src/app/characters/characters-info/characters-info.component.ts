import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppService } from '../../app.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-characters-info',
  imports: [CommonModule],
  templateUrl: './characters-info.component.html',
  styleUrl: './characters-info.component.scss'
})
export class CharactersInfoComponent {
  character:any;

  constructor(
    private route: ActivatedRoute,
    private appService: AppService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id') || ''; // Get the Id from the route
    this.getCharacterById(id);
  }

  getCharacterById(id: string): void {
    this.appService.getCharacterById(id).subscribe(
      (response: any) => {
        this.character = response[0];
        console.log(this.character)
      },
      (error: any) => {
        console.error('Error fetching character details:', error);
      }
    );
  }

}
