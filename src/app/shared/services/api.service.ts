import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { videoGames } from '../model/videoGames';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private _baseUrl = 'http://localhost:3000';
  private _urlComplete =this._baseUrl+'/videojuegos'

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

  updateNumVistas(videoGame: videoGames): Observable<any> {
    const url = `${this._baseUrl}/videojuegos/${videoGame.id}`;
    const body = { ...videoGame};

    return this.http.put(url, body);
  }
}
