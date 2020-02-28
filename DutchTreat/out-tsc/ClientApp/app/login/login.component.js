"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var Login = /** @class */ (function () {
    function Login(data, router) {
        this.data = data;
        this.router = router;
        this.errorMessage = "";
        this.creds = {
            UserName: "",
            Password: ""
        };
    }
    Login.prototype.onLogin = function () {
        var _this = this;
        this.data.login(this.creds)
            .subscribe(function (success) {
            if (success) {
                if (_this.data.order.items.length == 0) {
                    _this.router.navigate(["/"]);
                }
                else {
                    _this.router.navigate(["checkout"]);
                }
            }
        }, function (err) { return _this.errorMessage = "Failed to login"; });
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