import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login-form',
  imports: [ ReactiveFormsModule],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})
export class LoginFormComponent {
   loginService = inject(LoginService)

   loginForm = new FormGroup({
    nome: new FormControl("", [Validators.required]),
    senha: new  FormControl("", [Validators.required]),
   })
   onSubmitLogin() {
      const  {nome, senha } = this.loginForm.value
      if(!this.loginForm.valid || !nome || !senha) {
        alert("Existem pontos não preenchidos!")
        return
      }
      this.loginService.login(nome, senha).subscribe({
        error: (err) => {    /**É bom que a mensagem de erro seja individual */
          if(err.status === 401) {
            alert("Usuário ou senha incorretos!")
          }
          if(err.status === 500) {
            alert("Erro interno! Tente novamente mais tarde...")
            return
          }
            alert("Erro interno! Tente novamente mais tarde...")
        }
      })
   }
}
