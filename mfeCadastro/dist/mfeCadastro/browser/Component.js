// src/app/components/pages/user/new-user.ts
import { Component } from "@angular/core";
import { ReactiveFormsModule, Validators } from "@angular/forms";
import * as i02 from "@angular/core";
import * as i12 from "@angular/forms";

// src/app/services/user/user-service.ts
import { Injectable } from "@angular/core";

// src/environments/environments.ts
var environment = {
  production: false,
  jsonserver_host: "http://localhost:3000"
};

// src/app/services/user/user-config.ts
var userURIs = {
  userList: `${environment.jsonserver_host}/users`
};

// src/app/services/user/user-service.ts
import { catchError, throwError } from "rxjs";
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "ngx-toastr";
var UserService = class _UserService {
  httpClient;
  toastr;
  constructor(httpClient, toastr) {
    this.httpClient = httpClient;
    this.toastr = toastr;
  }
  createUser(user) {
    return this.httpClient.post(userURIs.userList, user).pipe(catchError(this.handleError));
  }
  handleError(error) {
    if (error.error instanceof ErrorEvent) {
      console.error("Houve um erro:", error.error.message);
    } else {
      console.error(`status: ${error.status}, descri\xE7\xE3o: ${error.error}`);
    }
    return throwError(() => new Error("Algum erro aconteceu, tente novamente mais tarde!"));
  }
  static \u0275fac = function UserService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UserService)(i0.\u0275\u0275inject(i1.HttpClient), i0.\u0275\u0275inject(i2.ToastrService));
  };
  static \u0275prov = /* @__PURE__ */ i0.\u0275\u0275defineInjectable({ token: _UserService, factory: _UserService.\u0275fac, providedIn: "root" });
};

// src/app/components/pages/user/new-user.ts
import * as i3 from "@angular/router";
import * as i4 from "ngx-toastr";
var NewUser = class _NewUser {
  formBuilder;
  userService;
  router;
  toastr;
  userForm;
  constructor(formBuilder, userService, router, toastr) {
    this.formBuilder = formBuilder;
    this.userService = userService;
    this.router = router;
    this.toastr = toastr;
    this.userForm = this.formBuilder.group({
      name: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]]
    });
  }
  addUser() {
    this.userService.createUser(this.userForm.value).subscribe((response) => {
      this.toastr.success("Usu\xE1rio cadastrado com sucesso!", "Success");
      this.router.navigate(["/mfeSucesso"]);
    });
  }
  updateTitle(title, icon) {
    window.dispatchEvent(new CustomEvent("updateTitle", { detail: { title, icon } }));
  }
  ngOnInit() {
    this.updateTitle("Cadastro de usu\xE1rios", "supervisor_account");
  }
  onSubmit() {
    if (this.userForm.valid) {
      this.addUser();
    }
  }
  static \u0275fac = function NewUser_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NewUser)(i02.\u0275\u0275directiveInject(i12.FormBuilder), i02.\u0275\u0275directiveInject(UserService), i02.\u0275\u0275directiveInject(i3.Router), i02.\u0275\u0275directiveInject(i4.ToastrService));
  };
  static \u0275cmp = /* @__PURE__ */ i02.\u0275\u0275defineComponent({ type: _NewUser, selectors: [["app-new-user"]], decls: 17, vars: 2, consts: [[1, "card"], [1, "sub-title"], [1, "form", 3, "ngSubmit", "formGroup"], [1, "form-item"], ["for", "name"], ["type", "text", "id", "name", "formControlName", "name"], ["for", "email"], ["type", "email", "id", "email", "formControlName", "email"], [1, "form-actions"], [1, "btn", "btn-primary", 3, "click"], ["type", "submit", 1, "btn", "btn-sucess", 3, "disabled"]], template: function NewUser_Template(rf, ctx) {
    if (rf & 1) {
      i02.\u0275\u0275elementStart(0, "div", 0)(1, "h1", 1);
      i02.\u0275\u0275text(2, "Novo Usu\xE1rio");
      i02.\u0275\u0275elementEnd();
      i02.\u0275\u0275elementStart(3, "form", 2);
      i02.\u0275\u0275listener("ngSubmit", function NewUser_Template_form_ngSubmit_3_listener() {
        return ctx.onSubmit();
      });
      i02.\u0275\u0275elementStart(4, "div", 3)(5, "label", 4);
      i02.\u0275\u0275text(6, "Nome:");
      i02.\u0275\u0275elementEnd();
      i02.\u0275\u0275element(7, "input", 5);
      i02.\u0275\u0275elementEnd();
      i02.\u0275\u0275elementStart(8, "div", 3)(9, "label", 6);
      i02.\u0275\u0275text(10, "E-mail:");
      i02.\u0275\u0275elementEnd();
      i02.\u0275\u0275element(11, "input", 7);
      i02.\u0275\u0275elementEnd();
      i02.\u0275\u0275elementStart(12, "div", 8)(13, "button", 9);
      i02.\u0275\u0275listener("click", function NewUser_Template_button_click_13_listener() {
        return ctx.userForm.reset();
      });
      i02.\u0275\u0275text(14, "Limpar");
      i02.\u0275\u0275elementEnd();
      i02.\u0275\u0275elementStart(15, "button", 10);
      i02.\u0275\u0275text(16, "Salvar");
      i02.\u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      i02.\u0275\u0275advance(3);
      i02.\u0275\u0275property("formGroup", ctx.userForm);
      i02.\u0275\u0275advance(12);
      i02.\u0275\u0275property("disabled", ctx.userForm.invalid);
    }
  }, dependencies: [ReactiveFormsModule, i12.\u0275NgNoValidate, i12.DefaultValueAccessor, i12.NgControlStatus, i12.NgControlStatusGroup, i12.FormGroupDirective, i12.FormControlName], styles: ["\n\n.form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  min-width: 400px;\n}\n.form-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n  margin-top: 10px;\n}\n.form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 15px;\n  color: #333333;\n  margin-bottom: 5px;\n}\n.form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  padding: 6px 8px;\n  border: 1px solid #bbbbbb;\n  border-radius: 4px;\n  margin-bottom: 10px;\n}\n.form[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  cursor: pointer;\n  padding: 7px 22px;\n  margin-left: 10px;\n  font-weight: 600;\n}\n.form[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: no-drop;\n}\n.form[_ngcontent-%COMP%]   .btn-sucess[_ngcontent-%COMP%] {\n  border-radius: 3px;\n  border: 0px solid green;\n  background: #0e890e;\n  color: #ffffff;\n  transition: 0.1s ease-in all;\n}\n.form[_ngcontent-%COMP%]   .btn-sucess[_ngcontent-%COMP%]:hover {\n  background: #086b08;\n}\n.form[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%] {\n  border-radius: 3px;\n  border: 1px solid #9d9d9d;\n  background: #ffffff;\n  color: #4a4a4a;\n  transition: 0.1s ease-in all;\n}\n.form[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%]:hover {\n  background: #eeeeee;\n}\n/*# sourceMappingURL=new-user.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i02.\u0275setClassDebugInfo(NewUser, { className: "NewUser", filePath: "src/app/components/pages/user/new-user.ts", lineNumber: 13 });
})();
export {
  NewUser
};
//# sourceMappingURL=Component.js.map
