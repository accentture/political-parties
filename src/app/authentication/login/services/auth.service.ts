import { INTERNAL_ROUTES } from './../constants/routes/internal.routes';
import { API_ROTUES } from './../constants/routes/api.routes';
import { ERRORS_CONST } from './../constants/error/errors.const';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { IApiUserAuthentication } from './../interfaces/api/iapi-auth-user.metadata';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators'

//with this behaviorSubject, we will be able to remember the last value emited by observable to all our subscription

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  /* WHEN USER LOGIN IT WIL BE SAVING IN AN OBSERVABLE AND LOCALSTORAGE  */

  public currentUser:BehaviorSubject<IApiUserAuthentication>
  public nameUserLS = /* LS = local storage */ 'currentUserDesignicode'
  constructor(
    private http:HttpClient,
    private router:Router
  ) { 
    this.currentUser = new BehaviorSubject(

      //JSON.parse() : it because when I use local storage, I need to use stringify
      JSON.parse(localStorage.getItem(this.nameUserLS))
    )
  }

  get getUser(): IApiUserAuthentication {
    /* 
      next(): allows to change the value
      value : is to get the value
    */
    return this.currentUser.value
  }

  login(
    data:{
      email:string,
      password:string
    }
  ): Observable <{ error:boolean, msg:string, data:any }>  {
    const _response = {error:true, msg: ERRORS_CONST.LOGIN.ERROR, data:null}
    return this.http.post<{error:boolean, msg:string, data:any}>(API_ROTUES.AUTH.LOGIN, data)
      .pipe( //map allows to map the information after
        map( response => {
          _response.msg = response.msg
          _response.error = response.error
          _response.data = response.data

          this.setUserLocalStorage(response.data)
          this.currentUser.next(response.data)

          //if doesn't exist error redirect to main panel
          if(!response.error){
            this.router.navigateByUrl(INTERNAL_ROUTES.PANEL_USER_LIST)
          }

          return _response
        }),
        catchError( error => {
          return of(_response)
        })
      )
  }
  logout(){
    localStorage.removeItem(this.nameUserLS)
    this.currentUser.next(null)
    this.router.navigateByUrl(INTERNAL_ROUTES.AUTH_LOGIN)
  }


  private setUserLocalStorage(user:IApiUserAuthentication){
    localStorage.setItem(this.nameUserLS, JSON.stringify(user))
  }
}
