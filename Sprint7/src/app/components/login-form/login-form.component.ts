import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  imports: [ ReactiveFormsModule],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})
export class LoginFormComponent {

   loginForm = new FormGroup({
    nome: new FormControl(),
    senha: new  FormControl(""),
   })
   onFazerLogin() {
      
   }
}
