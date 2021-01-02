import { Injectable } from '@angular/core';
import { Auth } from 'aws-amplify';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  setLoginCache(userID: string) {
    localStorage.setItem('userID', userID);
  }

  getUserID() {
    return localStorage.getItem('userID');
  }

  logout() {
    Auth.signOut().then(() => {
      localStorage.removeItem('username');
      localStorage.removeItem('userID');
    });
  }

  isLoggedIn(): boolean {
    const userID = localStorage.getItem('userID');
    if( typeof(userID) === 'string' ) return true;
    else return false;
  }
}
