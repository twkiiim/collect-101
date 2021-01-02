import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { API, Auth, Hub } from 'aws-amplify';
import { APIService, CreateUserInput } from 'src/app/services/API.service';
import { AuthService } from 'src/app/services/auth.service';
import { FormFieldTypes } from '@aws-amplify/ui-components';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  constructor(
    private authService: AuthService,
    private apiService: APIService,
    private router: Router,
  ) { 

    this.formFields = [
      { type: "username" },
      { type: "password" },
      { type: "email" },
    ];
  }

  formFields: FormFieldTypes;

  ngOnInit() {

    this.checkLogin();

    // When user signing up, make sure the user is created via the GraphQL API.
    // This has to be implemented in a separate workload, 
    // but it's okay not to be too specific for the moment :)

    let prevEvent = null;
    let signedUpUsername = null;

    Hub.listen('auth', (data) => {
      console.log(data);
      const event = data.payload.event; 
      
      if( event === 'signUp' ) {
        signedUpUsername = data.payload.data.user.username;
      }
      else if( event === 'signIn' ) {
        const username = data.payload.data.username;

        if( prevEvent === 'signUp' && username === signedUpUsername ) {
          const userInput: CreateUserInput = { username: username };
          this.apiService.CreateUser(userInput).then(result => {
            console.log('------ new user has been created! ------')
            console.log(result);
            this.checkLogin();
          }).catch(error => {
            console.log('failed to create a new user');
            console.error(error);
          });
        }
        else {
          this.checkLogin();
        }
      }

      prevEvent = event;
    });

  }

  checkLogin() {
    // this.authService.logout();
    // redirect the user to main page and set login cache
    Auth.currentAuthenticatedUser().then((user) => {
      this.apiService.ListUsers({
        username: {
          eq: user.username
        }
      }).then( users => {
        console.log(users);
        const userID = users.items[0].id;
        this.authService.setLoginCache(userID);
        this.router.navigate(['/']);
      });
    });
  }
}
