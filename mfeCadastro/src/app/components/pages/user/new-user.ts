import { Component } from '@angular/core';
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
export class NewUser {

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

  public onSubmit() {
    if (this.userForm.valid) {
      this.addUser();
    }
  }
}
