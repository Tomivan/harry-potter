import { Routes } from '@angular/router';
import { CharactersComponent } from './characters/characters.component';
import { HousesComponent } from './houses/houses.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SpellsComponent } from './spells/spells.component';
import { StaffComponent } from './staff/staff.component';
import { StudentsComponent } from './students/students.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'characters', component: CharactersComponent },
    { path: 'houses', component: HousesComponent },
    { path: 'spells', component: SpellsComponent },
    { path: 'students', component: StudentsComponent },
    { path: 'staff', component: StaffComponent },
    { path: '**', component: PageNotFoundComponent },
];
