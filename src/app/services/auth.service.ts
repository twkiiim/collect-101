import { Injectable } from '@angular/core';
import { Auth } from 'aws-amplify';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor() { }

  async checkLogin() {
    try {
      const user = await Auth.currentAuthenticatedUser();

    } catch(error) {  
      return false;
    }
    
    return true;
  }
}
