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
exports.Time_tasks = void 0;
var typeorm_1 = require("typeorm");
var Time_tasks = /** @class */ (function () {
    function Time_tasks() {
    }
    __decorate([
        (0, typeorm_1.PrimaryColumn)(),
        __metadata("design:type", Number)
    ], Time_tasks.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", Number)
    ], Time_tasks.prototype, "id_task", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Time_tasks.prototype, "time", void 0);
    Time_tasks = __decorate([
        (0, typeorm_1.Entity)('time_tasks')
    ], Time_tasks);
    return Time_tasks;
}());
exports.Time_tasks = Time_tasks;
