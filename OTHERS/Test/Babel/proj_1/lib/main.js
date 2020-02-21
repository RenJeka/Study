"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

window.addEventListener("load", function () {
  var aaa = function aaa(x) {
    return x + 2;
  };

  Promise.resolve()["finally"]();

  function myAsyncFunc() {
    return _myAsyncFunc.apply(this, arguments);
  }

  function _myAsyncFunc() {
    _myAsyncFunc = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee() {
      var myRequest, bbb;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return fetch("https://jsonplaceholder.typicode.com/users");

            case 2:
              myRequest = _context.sent;
              _context.next = 5;
              return myRequest.json();

            case 5:
              bbb = _context.sent;
              console.log(myRequest);
              console.log(bbb);

            case 8:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _myAsyncFunc.apply(this, arguments);
  }

  myAsyncFunc();
});