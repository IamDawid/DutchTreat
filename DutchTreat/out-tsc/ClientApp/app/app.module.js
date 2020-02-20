"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var app_component_1 = require("./app.component");
var productList_component_1 = require("./shop/productList.component");
var cart_component_1 = require("./shop/cart.component");
var shop_component_1 = require("./shop/shop.component");
var checkout_component_1 = require("./checkout/checkout.component");
var login_component_1 = require("./login/login.component");
var dataService_1 = require("./shared/dataService");
var router_1 = require("@angular/router");
var routes = [
    { path: "", component: shop_component_1.Shop },
    { path: "checkout", component: checkout_component_1.Checkout },
    { path: "login", component: login_component_1.Login }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib_1.__decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                productList_component_1.ProductList,
                cart_component_1.Cart,
                shop_component_1.Shop,
                checkout_component_1.Checkout,
                login_component_1.Login
            ],
            imports: [
                platform_browser_1.BrowserModule,
                http_1.HttpClientModule,
                router_1.RouterModule.forRoot(routes, {
                    useHash: true,
                    enableTracing: false // for Debugging of the Routes
                })
            ],
            providers: [
                dataService_1.DataService
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map