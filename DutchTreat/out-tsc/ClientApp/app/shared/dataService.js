"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var operators_1 = require("rxjs/operators");
var order_1 = require("./order");
var DataService = /** @class */ (function () {
    function DataService(http) {
        this.http = http;
        this.order = new order_1.Order();
        this.products = [];
    }
    DataService.prototype.loadProducts = function () {
        var _this = this;
        return this.http.get("/api/products")
            .pipe(operators_1.map(function (data) {
            _this.products = data;
            return true;
        }));
    };
    DataService.prototype.addToOrder = function (newProduct) {
        var item = new order_1.OrderItem();
        item.productId = newProduct.id;
        item.productArtist = newProduct.artist;
        item.productArtId = newProduct.artId;
        item.productCategory = newProduct.category;
        item.productSize = newProduct.size;
        item.productTitle = newProduct.title;
        item.unitPrice = newProduct.price;
        item.quantity = 1;
        this.order.items.push(item);
    };
    DataService = tslib_1.__decorate([
        core_1.Injectable()
    ], DataService);
    return DataService;
}());
exports.DataService = DataService;
//# sourceMappingURL=dataService.js.map