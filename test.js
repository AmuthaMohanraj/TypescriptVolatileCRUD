"use strict";
exports.__esModule = true;
var Lstudent = /** @class */ (function () {
    function Lstudent() {
    }
    return Lstudent;
}());
var student = /** @class */ (function () {
    function student() {
        this.users = [
            { id: 1, name: 'mohan', age: 21, isActive: true },
            { id: 2, name: 'chandru', age: 23, isActive: true },
            { id: 3, name: 'komathi', age: 19, isActive: true },
            { id: 4, name: 'poongodi', age: 25, isActive: true },
            { id: 5, name: 'perumal', age: 21, isActive: false }
        ];
    }
    student.prototype.getAllUsersFalseAlso = function () {
        return this.users;
    };
    student.prototype.getAllUser = function () {
        var ActiveUsers = this.users.filter(function (e) { return e.isActive === true; });
        return ActiveUsers;
    };
    student.prototype.getUserById = function (userId) {
        var user = this.users.filter(function (e) { return e.id === userId; });
        return user;
    };
    student.prototype.editUser = function (editUserid, editedUserSource) {
        console.log("editUserId", editUserId);
        var User = this.users.filter(function (e) { return e.id === editUserId; });
        Object.assign(User, editedUserSource);
    };
    student.prototype.deleteUser = function (id) {
        var user = this.users.filter(function (user) {
            if (user.id === id) {
                user.isActive = false;
            }
        });
    };
    return student;
}());
var stdObj = new student();
console.log("getAllUsersFalseAlso", stdObj.getAllUsersFalseAlso());
console.log("getAllUsers", stdObj.getAllUser());
console.log("getUserById", stdObj.getUserById(2));
var editUserId = 1;
var editUserObject = { id: 1, name: 'mohan', age: 12 };
stdObj.editUser(editUserId, editUserObject);
stdObj.deleteUser(5);
console.log("getAllUsers", stdObj.getAllUser());
console.log("getAllUsersFalseAlso", stdObj.getAllUsersFalseAlso());
