"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var index_1 = require("../index");
var Sample2Component = /** @class */ (function () {
    function Sample2Component(logger) {
        this.logger = logger;
    }
    Sample2Component.prototype.logMessage = function () {
        this.logger.log(this.message);
    };
    Sample2Component = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: "my-sample2",
            templateUrl: "sample2.component.html",
            providers: [index_1.Logger2,
                { provide: index_1.Logger, useExisting: index_1.Logger2 }] // для токена Logger использовать существующий экземпляр Logger2, а не создавать новый.
            // Теперь компоненты будут использовать один объект, хотя при внедрении зависимости будут использоваться два разных токена Logger и Logger2 
        }),
        __metadata("design:paramtypes", [index_1.Logger])
    ], Sample2Component);
    return Sample2Component;
}());
exports.Sample2Component = Sample2Component;
//# sourceMappingURL=sample2.component.js.map