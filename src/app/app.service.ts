import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, catchError } from 'rxjs/operators'
import { environment } from '../environments/environment';
import { endPoint } from './endPoint';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  getAllCharacters() {
    return this.http.get<any>(
      environment.baseApiUrl + endPoint.getAllCharacters
    )
    .pipe(
      map((response) => {
        return response
      }),
      catchError((err) => {
        return err
      })
    );
  }

  getCharacterById(id:string) {
    return this.http.get<any>(
      environment.baseApiUrl + endPoint.getCharacter + "/"+ id
    )
    .pipe(
      map((response) => {
        return response
      }),
      catchError((err) => {
        return err
      })
    );
  }

  getAllStudentsInGriffindor() {
    return this.http.get<any>(
      environment.baseApiUrl + endPoint.getAllGryffindorStudents
    )
    .pipe(
      map((response) => {
        return response
      }),
      catchError((err) => {
        return err
      })
    );
  }

  getAllStudentsInSlytherin() {
    return this.http.get<any>(
      environment.baseApiUrl + endPoint.getAllSlytherinStudents
    )
    .pipe(
      map((response) => {
        return response
      }),
      catchError((err) => {
        return err
      })
    );
  }

  getAllStudentsInHufflepuff() {
    return this.http.get<any>(
      environment.baseApiUrl + endPoint.getAllHufflepuffStudents
    )
    .pipe(
      map((response) => {
        return response
      }),
      catchError((err) => {
        return err
      })
    );
  }

  getAllStudentsInRavenclaw() {
    return this.http.get<any>(
      environment.baseApiUrl + endPoint.getAllRavenclawStudents
    )
    .pipe(
      map((response) => {
        return response
      }),
      catchError((err) => {
        return err
      })
    );
  }

  getAllStudents() {
    return this.http.get<any>(
      environment.baseApiUrl + endPoint.getAllStudents
    )
    .pipe(
      map((response) => {
        return response
      }),
      catchError((err) => {
        return err
      })
    );
  }

  getAllStaff() {
    return this.http.get<any>(
      environment.baseApiUrl + endPoint.getAllStaff
    )
    .pipe(
      map((response) => {
        return response
      }),
      catchError((err) => {
        return err
      })
    );
  }

  getAllSpells() {
    return this.http.get<any>(
      environment.baseApiUrl + endPoint.getAllSpells
    )
    .pipe(
      map((response) => {
        console.log(response)
        return response
      }),
      catchError((err) => {
        return err
      })
    );
  }
}
