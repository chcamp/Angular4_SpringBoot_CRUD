import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs-compat/Observable';
import { throwError } from 'rxjs';

import 'rxjs-compat/add/operator/map';
import 'rxjs-compat/add/operator/catch';
import 'rxjs-compat/add/observable/throw';

import { User } from '../user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  //baseUrl aca pones la direccion del Backend de srpingBoot
  //debe de estar tu backend o springBoot encendido si no no 
  //genera el JSON de Hibernate y H2" DB!!!
  private baseUrl: string = 'http://localhost:8181/api';
  private headers = new Headers({ 'content-type': 'application/json' });
  private options = new RequestOptions({ headers: this.headers });
  private user: User;

  constructor(private _http: Http) { }

  //Listar usuarios
  getUsers() {

    return this._http.get(this.baseUrl + '/users', this.options)
      .map((response: Response) => response.json())
      .catch(this.errorHandler);

  }

  //por user ID

  getUser(id: number) {

    return this._http.get(this.baseUrl + '/user/' + id, this.options)
      .map((response: Response) => response.json())
      .catch(this.errorHandler);


  }
  // Eliminar user
  eliminarUser(id: number) {

    return this._http.delete(this.baseUrl + '/user/' + id, this.options)
      .map((response: Response) => response.json())
      .catch(this.errorHandler);

  }

  //Crear usuario
  nuevoUser(user: User) {

    return this._http.post(this.baseUrl + '/user', JSON.stringify(user), this.options)
      .map((response: Response) => response.json())
      .catch(this.errorHandler);

      console.log("el de user.service" + user);

  }

  //Actualizar usuario
  actualizarUser(id: number, user: User) {
    
    return this._http.put(this.baseUrl + '/user/' + id, JSON.stringify(user), this.options)
      .map((response: Response) => response.json())
      .catch(this.errorHandler);

      console.log("Aca en actualizarUser es: " + user);
  }

  errorHandler(error: Response) {    
    return throwError(error || "Error de Servidor!");

  }

  //Metodos setter y getter para user aca pasas lo que hay en el backen user
  //a tu objeto user local lleno
  setter(user:User){
    this.user=user;
  }

  //retorna el user lleno
  getter(){
    return this.user;
  }
}


