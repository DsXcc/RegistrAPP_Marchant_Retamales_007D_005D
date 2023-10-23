import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../pages/interfaces/interfaces';
import { environment } from 'src/environments/environment';
import { Users } from '../pages/interfaces/interfaces';
import { Anime } from '../pages/interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpclient:HttpClient) { }

  CrearUsuario(newUser: User): Observable<User>{
    return this.httpclient.post<Users>(`${environment.apiUrl}/usuarios`, newUser);
  }



  listarAnime():Observable<Anime>{
    return this.httpclient.get<Anime>(`${environment.apiUrl}/anime`);
  }

}
