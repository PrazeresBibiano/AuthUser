import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { Auth } from 'src/app/core/services/auth/auth';
import { AuthServiceService } from 'src/app/core/services/authService/auth-service.service';
import { FormBuilderInitService } from 'src/app/core/services/formbuilder/form-builder-init.service';

@Component({
  selector: 'app-sing-in',
  templateUrl: './sing-in.component.html',
  styleUrls: ['./sing-in.component.scss']
})
export class SingInComponent implements OnInit{

  public formAuth: any;
  public message_error:string =''

  constructor(
    private formBuilderInitService: FormBuilderInitService,
    private authService: AuthServiceService,
    private router: Router
  ){

  }

  ngOnInit(): void {
    this.initAuth()
    this.authService.isTokenTrue()
  }

  initAuth(){
    this.formAuth = this.formBuilderInitService.initAuth(this.formAuth)
  }
  
  async login(auth:Auth){
    try {

      let user = await this.authService.postAuth(auth)
      localStorage.removeItem('token')
      localStorage.setItem('token',user.token ) 
      this.router.navigate(['admin'])
    } catch (error:any) {
      if(error.error.message){
        this.message_error = error.error.message
      }else{
        this.message_error = " Algum problema no Servidor, tente novamente mais tarde"
      }
      
    }
     
    
  }
}
