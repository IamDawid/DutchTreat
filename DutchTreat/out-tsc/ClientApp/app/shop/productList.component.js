"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var ProductList = /** @class */ (function () {
    function ProductList(data) {
        this.data = data;
        this.products = [];
        this.products = data.products;
    }
    ProductList = tslib_1.__decorate([
        core_1.Component({
            selector: "product-list",
            templateUrl: "productList.component.html",
            styleUrls: []
        })
    ], ProductList);
    return ProductList;
}());
exports.ProductList = ProductList;
//# sourceMappingURL=productList.component.js.map