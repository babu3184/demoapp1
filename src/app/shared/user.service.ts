import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../model/user.model'
const headerOption = {
  headers: new HttpHeaders({'Content-type': 'application/json '})
};

@Injectable()
export class UserService {
url = 'http://localhost:3000/User';

  constructor(private http:HttpClient) { }

  getAllUsers():Observable<User[]> {
     return this.http.get<User[]>(this.url,headerOption);
  }
}
