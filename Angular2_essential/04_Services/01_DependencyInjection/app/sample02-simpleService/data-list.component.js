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
var index_1 = require("./index");
var DataListComponent = /** @class */ (function () {
    // private dataService: DataService внедрение зависимости через конструктор
    function DataListComponent(dataService, service2) {
        this.dataService = dataService;
        this.service2 = service2;
    }
    DataListComponent.prototype.ngOnInit = function () {
        this.itemsSource = this.dataService.getData();
        this.myVariable = this.service2.someMethod();
    };
    DataListComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: "data-list",
            templateUrl: "data-list.component.html"
        }),
        __metadata("design:paramtypes", [index_1.DataService, index_1.Service2])
    ], DataListComponent);
    return DataListComponent;
}());
exports.DataListComponent = DataListComponent;
//# sourceMappingURL=data-list.component.js.map