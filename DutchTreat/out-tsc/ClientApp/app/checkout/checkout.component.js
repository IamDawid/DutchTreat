"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var Checkout = /** @class */ (function () {
    function Checkout(data) {
        this.data = data;
    }
    Checkout.prototype.onCheckout = function () {
        // TODO
        alert("Doing checkout");
    };
    Checkout = tslib_1.__decorate([
        core_1.Component({
            selector: "checkout",
            templateUrl: "checkout.component.html",
            styleUrls: ['checkout.component.css']
        })
    ], Checkout);
    return Checkout;
}());
exports.Checkout = Checkout;
//# sourceMappingURL=checkout.component.js.map