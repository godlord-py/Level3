"use strict";

var _user = require("./user");
var _list = require("./list");
var userList = new _list.List();
userList.add(new _user.User('Aayush', 30));
userList.add(new _user.User('Pathak', 25));
var users = userList.getAll();
users.forEach(function (user) {
  return console.log(user.sayHello());
});