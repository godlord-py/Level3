"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.logMethod = logMethod;
function logMethod(target, propertyName, descriptor) {
  var originalMethod = descriptor.value;
  descriptor.value = function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    console.log("Calling ".concat(propertyName, " with arguments:"), args);
    var result = originalMethod.apply(this, args);
    console.log("Result: ".concat(result));
    return result;
  };
  return descriptor;
}