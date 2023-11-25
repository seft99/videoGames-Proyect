import {  Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/enviro/environment';

@Injectable({
  providedIn: 'root'
})
export class VideoGamesService {
private baseUrl : string | undefined = environment.apiUrl;



constructor( private http : HttpClient) { }

getVideoGames(): Observable<any> {
  return this.http.get(`${this.baseUrl}/games`);
}
getVideoGamesById(id: string): Observable<any> {
  const url = `${this.baseUrl}/games/${id}`;
  return this.http.get(url);
}
postComments(idUser: string, idVideoGame: string, commentary: string){
  const url = `${this.baseUrl}/games`; 
  const credentials = { idUser, idVideoGame, commentary };
  return this.http.post(url, credentials);
}

incViewGame(idVideoGame: string){
  const url = `${this.baseUrl}/games/view/${idVideoGame}`
  return  this.http.get(url)
}

addComment(gameId: string, comment: string): Observable<any> {
  const url = `http://localhost:4000/api/games/${gameId}/comment`;
  return this.http.post(url, {
    username: 'zab',
    content: comment
  });
}

}
