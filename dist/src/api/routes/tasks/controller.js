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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTaskById = exports.getAllTasks = void 0;
var routing_controllers_1 = require("routing-controllers");
var service_1 = require("./service");
var getAllTasks = /** @class */ (function () {
    function getAllTasks() {
    }
    getAllTasks.prototype.getAll = function () {
        return (0, service_1.findAll)();
    };
    __decorate([
        (0, routing_controllers_1.Get)('/tasks'),
        (0, routing_controllers_1.HttpCode)(200),
        (0, routing_controllers_1.OnUndefined)(400),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], getAllTasks.prototype, "getAll", null);
    getAllTasks = __decorate([
        (0, routing_controllers_1.JsonController)('/suportfly')
    ], getAllTasks);
    return getAllTasks;
}());
exports.getAllTasks = getAllTasks;
var getTaskById = /** @class */ (function () {
    function getTaskById() {
    }
    getTaskById.prototype.getWithFilter = function (id) {
        return (0, service_1.findOne)(id);
    };
    __decorate([
        (0, routing_controllers_1.Get)('/tasks/:id'),
        (0, routing_controllers_1.HttpCode)(200),
        (0, routing_controllers_1.OnUndefined)(400),
        __param(0, (0, routing_controllers_1.Param)('id')),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", void 0)
    ], getTaskById.prototype, "getWithFilter", null);
    getTaskById = __decorate([
        (0, routing_controllers_1.JsonController)('/suportfly')
    ], getTaskById);
    return getTaskById;
}());
exports.getTaskById = getTaskById;
/*
@Post('')
@HttpCode(201)
@OnUndefined(500)
post(@Body({ validate: true }) fromTosRequest: FromToRequest) {
  return create(fromTosRequest)
}
*/ 
