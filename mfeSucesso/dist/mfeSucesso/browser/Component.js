// src/app/components/pages/user/user-list.ts
import { Component } from "@angular/core";
import { NgFor } from "@angular/common";
import * as i02 from "@angular/core";

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
  getUsers() {
    return this.httpClient.get(userURIs.userList).pipe(catchError(this.handleError));
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

// src/app/components/pages/user/user-list.ts
function UserList_tr_13_Template(rf, ctx) {
  if (rf & 1) {
    i02.\u0275\u0275elementStart(0, "tr")(1, "td");
    i02.\u0275\u0275text(2);
    i02.\u0275\u0275elementEnd();
    i02.\u0275\u0275elementStart(3, "td");
    i02.\u0275\u0275text(4);
    i02.\u0275\u0275elementEnd();
    i02.\u0275\u0275elementStart(5, "td");
    i02.\u0275\u0275text(6);
    i02.\u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const user_r1 = ctx.$implicit;
    i02.\u0275\u0275advance(2);
    i02.\u0275\u0275textInterpolate(user_r1.id);
    i02.\u0275\u0275advance(2);
    i02.\u0275\u0275textInterpolate(user_r1.name);
    i02.\u0275\u0275advance(2);
    i02.\u0275\u0275textInterpolate(user_r1.email);
  }
}
var UserList = class _UserList {
  userService;
  constructor(userService) {
    this.userService = userService;
  }
  users = [];
  getUserList() {
    this.userService.getUsers().subscribe((response) => this.users = response);
  }
  ngOnInit() {
    this.getUserList();
  }
  static \u0275fac = function UserList_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UserList)(i02.\u0275\u0275directiveInject(UserService));
  };
  static \u0275cmp = /* @__PURE__ */ i02.\u0275\u0275defineComponent({ type: _UserList, selectors: [["app-user-list"]], decls: 14, vars: 1, consts: [[1, "card"], [1, "sub-title"], [1, "table"], ["width", "20%"], ["width", "40%"], [4, "ngFor", "ngForOf"]], template: function UserList_Template(rf, ctx) {
    if (rf & 1) {
      i02.\u0275\u0275elementStart(0, "div", 0)(1, "h1", 1);
      i02.\u0275\u0275text(2, "Consulta de Usu\xE1rios");
      i02.\u0275\u0275elementEnd();
      i02.\u0275\u0275elementStart(3, "table", 2)(4, "thead")(5, "tr")(6, "th", 3);
      i02.\u0275\u0275text(7, "C\xF3digo");
      i02.\u0275\u0275elementEnd();
      i02.\u0275\u0275elementStart(8, "th", 4);
      i02.\u0275\u0275text(9, "Nome");
      i02.\u0275\u0275elementEnd();
      i02.\u0275\u0275elementStart(10, "th", 4);
      i02.\u0275\u0275text(11, "Email");
      i02.\u0275\u0275elementEnd()()();
      i02.\u0275\u0275elementStart(12, "tbody");
      i02.\u0275\u0275template(13, UserList_tr_13_Template, 7, 3, "tr", 5);
      i02.\u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      i02.\u0275\u0275advance(13);
      i02.\u0275\u0275property("ngForOf", ctx.users);
    }
  }, dependencies: [NgFor], styles: ["\n\n[_nghost-%COMP%] {\n  display: inline-block;\n}\n.table[_ngcontent-%COMP%] {\n  border: 1px solid #cccccc;\n  border-collapse: collapse;\n  color: #333333;\n  min-width: 600px;\n}\n.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  border: 1px solid #cccccc;\n  padding: 4px 10px;\n  text-align: left;\n  font-weight: 500;\n  font-size: 14px;\n}\n.table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(odd) {\n  background-color: #f5f5f5;\n}\n.table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  border: 1px solid #cccccc;\n  padding: 4px 10px;\n  font-size: 14px;\n}\n/*# sourceMappingURL=user-list.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i02.\u0275setClassDebugInfo(UserList, { className: "UserList", filePath: "src/app/components/pages/user/user-list.ts", lineNumber: 12 });
})();
export {
  UserList
};
//# sourceMappingURL=Component.js.map
