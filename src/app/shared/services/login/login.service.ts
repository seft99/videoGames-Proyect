import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/enviro/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private baseUrl: string | undefined = environment.apiUrl;

  constructor(private http: HttpClient) { }

  authenticateUser(email: string, password: string): Observable<any> {
    const url = `${this.baseUrl}/login`; 
    const credentials = { email, password };
    return this.http.post(url, credentials);
    
  }

  registerUser(email: string, password: string, username: string){
    const url = `${this.baseUrl}/register`; 
    const credentials = { email, password,username };
    return this.http.post(url, credentials);
  }

  logoutUser(){
    const url = `${this.baseUrl}/logout`; 

  }
}
