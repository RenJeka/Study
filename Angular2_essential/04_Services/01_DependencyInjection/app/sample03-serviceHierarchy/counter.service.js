"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var CounterService = /** @class */ (function () {
    function CounterService() {
        this.counter = 0;
    }
    CounterService.prototype.increment = function () {
        this.counter++;
    };
    CounterService.prototype.decrement = function () {
        this.counter--;
    };
    CounterService.prototype.getValue = function () {
        return this.counter;
    };
    CounterService = __decorate([
        core_1.Injectable()
    ], CounterService);
    return CounterService;
}());
exports.CounterService = CounterService;
//# sourceMappingURL=counter.service.js.map