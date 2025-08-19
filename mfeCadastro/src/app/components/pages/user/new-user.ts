import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../../../services/user/user-service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-new-user',
  imports: [ReactiveFormsModule],
  templateUrl: './new-user.html',
  styleUrl: './new-user.scss'
})
export class NewUser implements OnInit{

  public userForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private userService: UserService, private router: Router, private toastr: ToastrService) {
    this.userForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  public addUser() {
    this.userService.createUser(this.userForm.value)
      .subscribe
      ((response) => {
        this.toastr.success('Usuário cadastrado com sucesso!', 'Success');
        this.router.navigate(["/mfeSucesso"]);
      });
  }

  public updateTitle(title: string, icon: string) {
    window.dispatchEvent(new CustomEvent("updateTitle", { detail: { title: title, icon:  icon} }));
  }

  public ngOnInit(): void {
    this.updateTitle("Cadastro de usuários","supervisor_account");
  }

  public onSubmit() {
    if (this.userForm.valid) {
      this.addUser();
    }
  }
}
