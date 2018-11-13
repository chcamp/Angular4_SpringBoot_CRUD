import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListuserComponent } from './components/listuser/listuser.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { RouterModule, Routes } from '@angular/router';
import {UserService} from './shared_service/user.service';
import {HttpModule} from '@angular/http';


 // array para especificar en nuestra aplicacion
const appRoutes: Routes = [
  // aca ponemos los compoentes que vamos a usar para nuestra aplicacion
  {path: '', component: ListuserComponent},
  {path: 'op', component: UserFormComponent}


];

@NgModule({
  declarations: [
    AppComponent,
    ListuserComponent,
    UserFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
