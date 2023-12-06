import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environments } from 'src/app/environments/environments';
import { Auth } from '../auth/auth';
import { lastValueFrom } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  public url = environments.BASE_URL

  constructor(
    private http: HttpClient,
    
  ) { }

  async postAuth(auth:Auth):Promise<Auth>{
    let call = await this.http.post<Auth>(`${this.url}/sign`,auth)
    return lastValueFrom(call)
  }

  public isTokenTrue():boolean{
    let token = localStorage.getItem('token')
    if (token) return true

    const jwtHelper = new JwtHelperService()

  
    return !jwtHelper.isTokenExpired(token)
    
  }
}
