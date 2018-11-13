import { Component, OnInit } from '@angular/core';
import { User } from '../../user';
import { UserService } from '../../shared_service/user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  private user: User; 
  
  constructor(private _userService: UserService, private _router: Router) { }

  ngOnInit() {
    //al momento de que se cargue el formulario
    //estre traera los datos del user cargados return this.user;
    this.user = this._userService.getter();
      console.log("QUE TENGO ACAAA!! " + this.user.id);
  }

  //metodo processForm()
  processForm() {
    //si id no se encuentra, creara un nuevo usuario
    //si ubica o ya eciste el id lo actualizara.
    if (this.user.id == undefined) {
      //si es indefinido procedo a crear el nuevo user
      this._userService.nuevoUser(this.user).subscribe((user) => {
        console.log("ACA cayo " + this.user.nombre);
        //que actualice y se vaya a la raiz a listar
        this._router.navigate(['/']);
      }, (error) => {
        console.log(error);
      });
    } else {
      //si existe id entonces , actualiza.
       
      this._userService.actualizarUser(this.user.id, this.user).subscribe((user) => {

        console.log("Aca se actualiza: " + this.user.id,
        "nombre Actualizado: " + this.user.nombre + 
        "apellido Actualizado" + this.user.apellido);
        
        //despues de actualizar que te retorne a la raiz que es la lista de users.
        this._router.navigate(['/']);
      }, (error) => {
        console.log(error);
      });
    }
  } //fin processForm()

}
