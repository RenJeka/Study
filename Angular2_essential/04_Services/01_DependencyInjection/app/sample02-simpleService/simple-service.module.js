"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var index_1 = require("./index");
// Инжектор создается при запуске приложения.
// Для корректной работы инжектор нужно сконфигурировать, зарегистрировав провайдеров, которые создают сервисы необходимые приложению.
// Зарегистрировать провайдер можно на уровне модуля или компонента приложения.
var SimpleServiceModule = /** @class */ (function () {
    function SimpleServiceModule() {
    }
    SimpleServiceModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule],
            declarations: [index_1.DataListComponent],
            providers: [index_1.DataService, index_1.Service2]
        })
    ], SimpleServiceModule);
    return SimpleServiceModule;
}());
exports.SimpleServiceModule = SimpleServiceModule;
//# sourceMappingURL=simple-service.module.js.map