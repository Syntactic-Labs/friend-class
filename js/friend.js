"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Friend = void 0;
var Friend = (function () {
    function Friend(name, age, email, bff) {
        if (bff === void 0) { bff = false; }
        this.name = "";
        this.age = 0;
        this.email = "";
        this.bff = false;
        this.name = name;
        this.age = age;
        this.email = email;
        this.bff = bff;
    }
    Friend.prototype.print = function () {
        return this.name + " | " + this.age + " | " + this.email + " | " + this.bff;
    };
    Friend.printHeader = function () {
        return "Name  |   Age   |   Email   |    Bff";
    };
    return Friend;
}());
exports.Friend = Friend;
