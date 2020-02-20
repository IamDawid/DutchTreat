"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var Cart = /** @class */ (function () {
    function Cart(data, router) {
        this.data = data;
        this.router = router;
    }
    Cart.prototype.onCheckout = function () {
        //check if the user has to log in before going to checkout
        if (this.data.loginRequired) {
            this.router.navigate(["login"]);
        }
        else {
            this.router.navigate(["checkout"]);
        }
    };
    Cart = tslib_1.__decorate([
        core_1.Component({
            selector: "the-cart",
            templateUrl: "cart.component.html",
            styleUrls: []
        })
    ], Cart);
    return Cart;
}());
exports.Cart = Cart;
//# sourceMappingURL=cart.component.js.map