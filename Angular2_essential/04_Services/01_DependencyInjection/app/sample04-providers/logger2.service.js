"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Logger2 = /** @class */ (function () {
    function Logger2() {
        this.messages = [];
    }
    Logger2.prototype.log = function (message) {
        this.messages.push(message);
        console.log("Logger 2 " + message);
    };
    Logger2 = __decorate([
        core_1.Injectable()
    ], Logger2);
    return Logger2;
}());
exports.Logger2 = Logger2;
//# sourceMappingURL=logger2.service.js.map