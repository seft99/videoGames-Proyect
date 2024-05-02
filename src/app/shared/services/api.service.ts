import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private _baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

   getDataVideogames(): Observable<any> {
   return  this.http.get<any>(this._baseUrl+'/videojuegos');
  }
   getDataCarousel(): Observable<any> {
    return  this.http.get<any>(this._baseUrl+'/carousel');
   }
  getGamesByCategory(category: string) {
  return this.http.get<any>(this._baseUrl+`/videojuegos?categoria=${category}`);
  }
  getGameById(id:number){
    return this.http.get<any>(this._baseUrl+`/videojuegos/${id}`)
  }
}
