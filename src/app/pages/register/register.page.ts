import { Component } from '@angular/core';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';
import { APIService, CreateEntryInput } from 'src/app/services/API.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: 'register.page.html',
  styleUrls: ['register.page.scss'],
})
export class RegisterPage {

  phrase: string = ''
  definition: string = ''
  example: string = ''
  reference: string = ''

  constructor(
    private apiService: APIService,
    private authService: AuthService,
  ) {}

  register() {
    const createEntryInput: CreateEntryInput = {
      userID: this.authService.getUserID(),
      phrase: this.phrase,
      definition: this.definition,
      example: this.example,
      reference: this.reference,
    }

    this.apiService.CreateEntry(createEntryInput).then(result => {
      console.log(result);
    })
  }

}
