import { Component, OnInit } from '@angular/core';
import {UserService} from '../../shared_service/user.service';
import {User} from '../../user';
import {Router} from '@angular/router';


@Component({
  selector: 'app-listuser',
  templateUrl: './listuser.component.html',
  styleUrls: ['./listuser.component.css']
})
export class ListuserComponent implements OnInit {

  //creamos una variable de tipo array para guardar alli 
  //el objeto user que viene desde el backend.
  private users: User[];


  //Vamos a crera un array de usuarios para que ahi
  //cargue todos los usuarios.

  //vamos a inyectar la clase en el constructor
  constructor(private _userService:UserService, private _router:Router) { }

  //este metodo dentro inicializa algun metodo que esta dentro de el
  //en este caso el getUsers() que listara a todos los usuarios.
  ngOnInit() {
    this._userService.getUsers().subscribe((users)=>{
      console.log(users);
      //pasamos los datos del objeto backend a un arry front end.
      this.users = users;
    }, (error)=>{
      console.log(error);
    })
  }

  //Implementamdo el Metodo eliminarUser()
  eliminarUser(user){
      //llamamos el metodo delete del service class user.service.ts

      this._userService.eliminarUser(user.id).subscribe((data)=>{
            this.users.splice(this.users.indexOf(user, 1));            
             
     },(error)=>{
       console.log(error);
     })

  }

  //Implementando el metodo actualizarUser()
  actualizarUser(user){
      //cuando el de clic al actualizarUser, mandara el setter con el
      //Objeto user lleno para actualizarlo
      this._userService.setter(user);
      console.log("Este que va desde listUserCompo a /op " + user.nombre)
      //el router va a actualizar o recargar la pagina de /op 
      //para que lo envie y se muestre.
      this._router.navigate(['/op']);

  }

  //Implementando el metodo nuevoUser()
  nuevoUser(){
       //crea un objeto vacio user
      let user = new User();
      //envia el dato. 
      this._userService.setter(user);
      //el router va a actualizar o recargar la pagina de /op 
      //para que lo envie y se muestre.
      this._router.navigate(['/op']);
  }

}
