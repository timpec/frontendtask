import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pic } from '../../interfaces/pic'
import { User, logInResponse, registerResponse, checkResponse } from '../../interfaces/user';

/*
  Generated class for the MediaProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MediaProvider {

  url = 'https://media.mw.metropolia.fi/wbma';
  picArray: Pic[];

  loggedIn = false;

  constructor(public http: HttpClient) {
  }

  getAllMedia() {
    return this.http.get<Pic[]>(this.url + '/media');
  }

  getSingleMedia(id) {
    return this.http.get<Pic>(this.url + '/media/' + id);
  }

  login(user: User){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json'
      })
    };

    return this.http.post<logInResponse>(this.url + '/login', user, httpOptions)
  }

  register(user: User){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json'
      })
    };

    return this.http.post<registerResponse>(this.url + '/users', user, httpOptions)
  }

  check(user: User){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json'
      })
    };

    return this.http.get(this.url + '/users/username/'+ user.username);
  }
}
