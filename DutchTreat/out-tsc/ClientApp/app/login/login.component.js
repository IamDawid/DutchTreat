"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var Login = /** @class */ (function () {
    function Login(data, router) {
        this.data = data;
        this.router = router;
        this.creds = {
            username: "",
            password: ""
        };
    }
    Login.prototype.onLogin = function () {
    };
    Login = tslib_1.__decorate([
        core_1.Component({
            selector: "login",
            templateUrl: "login.component.html"
        })
    ], Login);
    return Login;
}());
exports.Login = Login;
//# sourceMappingURL=login.component.js.map