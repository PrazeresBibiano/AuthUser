import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Auth } from '../auth/auth';

@Injectable({
  providedIn: 'root'
})
export class FormBuilderInitService {

  public VALIDATORS_REQUIRED = Validators.required
  public VALIDATORS_EMAIL = Validators.email

  constructor(
  ) { }

  initAuth(auth?: Auth):FormGroup{
    return new FormGroup({
      email: new FormControl(auth?.email,[this.VALIDATORS_EMAIL,this.VALIDATORS_REQUIRED]),
      password: new FormControl(auth?.password,[this.VALIDATORS_REQUIRED])
    })
  }
}
