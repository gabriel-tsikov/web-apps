// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"scripts/views/homePage.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function homePage() {
  return {
    template: '<p>Welcome to your ToDo application</p> <p>Pleace login into your account</p>',
    listeners: []
  };
}

exports.default = homePage;

function homePageAfterLogin() {
  return {
    template: '<p>LOGIN SUCCESSFUL</p>',
    listeners: []
  };
}

exports.homePageAfterLogin = homePageAfterLogin;

function homePageAfterLogout() {
  return {
    template: '<p>LOGUT SUCCESSFUL</p>',
    listeners: []
  };
}

exports.homePageAfterLogout = homePageAfterLogout;
},{}],"scripts/constants.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TOKEN = 'token';
exports.LOGGED_USER = 'loggedUser';
exports.URL_BASE = 'http://52.164.252.100:8081/api';
exports.URL_AUTH = '/authenticate';
exports.URL_USERS = '/user';
exports.URL_TASKS = '/task';
exports.URL_TODOS = '/list';
},{}],"scripts/authentification.ts":[function(require,module,exports) {
"use strict";

var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

var __generator = this && this.__generator || function (thisArg, body) {
  var _ = {
    label: 0,
    sent: function sent() {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) {
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
        if (y = 0, t) op = [op[0] & 2, t.value];

        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;

          case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;

          case 7:
            op = _.ops.pop();

            _.trys.pop();

            continue;

          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }

            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }

            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }

            if (t && _.label < t[2]) {
              _.label = t[2];

              _.ops.push(op);

              break;
            }

            if (t[2]) _.ops.pop();

            _.trys.pop();

            continue;
        }

        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var constants_1 = require("./constants");

var AuthenticationService =
/** @class */
function () {
  function AuthenticationService() {}

  AuthenticationService.authenticate = function (username, password) {
    return __awaiter(this, void 0, void 0, function () {
      var response, result, token, userId, isAdmin;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [4
            /*yield*/
            , fetch(constants_1.URL_BASE + constants_1.URL_AUTH, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                username: username,
                password: password
              })
            })];

          case 1:
            response = _a.sent();
            if (!(response && response.ok)) return [3
            /*break*/
            , 3];
            return [4
            /*yield*/
            , response.json()];

          case 2:
            result = _a.sent();
            token = result.token, userId = result.userId, isAdmin = result.isAdmin;
            window.sessionStorage.setItem(constants_1.TOKEN, token);
            window.sessionStorage.setItem(constants_1.LOGGED_USER, JSON.stringify({
              id: userId,
              isAdmin: isAdmin
            }));
            _a.label = 3;

          case 3:
            return [2
            /*return*/
            ];
        }
      });
    });
  };

  AuthenticationService.getLoggedUser = function () {
    return JSON.parse(window.sessionStorage.getItem(constants_1.LOGGED_USER));
  };

  AuthenticationService.logout = function () {
    window.sessionStorage.removeItem(constants_1.LOGGED_USER);
    window.sessionStorage.removeItem(constants_1.TOKEN);
  };

  AuthenticationService.getAuthorizationHeader = function () {
    return 'Bearer ' + window.sessionStorage.getItem(constants_1.TOKEN);
  };

  return AuthenticationService;
}();

exports.default = AuthenticationService;
},{"./constants":"scripts/constants.ts"}],"scripts/repositories/baseRepository.ts":[function(require,module,exports) {
"use strict";

var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

var __generator = this && this.__generator || function (thisArg, body) {
  var _ = {
    label: 0,
    sent: function sent() {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) {
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
        if (y = 0, t) op = [op[0] & 2, t.value];

        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;

          case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;

          case 7:
            op = _.ops.pop();

            _.trys.pop();

            continue;

          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }

            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }

            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }

            if (t && _.label < t[2]) {
              _.label = t[2];

              _.ops.push(op);

              break;
            }

            if (t[2]) _.ops.pop();

            _.trys.pop();

            continue;
        }

        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var constants_1 = require("../constants");

var authentification_1 = __importDefault(require("../authentification"));

var BaseRepository =
/** @class */
function () {
  function BaseRepository(url) {
    this.url = url;
  }

  BaseRepository.prototype.getAll = function () {
    return __awaiter(this, void 0, void 0, function () {
      var response;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [4
            /*yield*/
            , fetch("" + constants_1.URL_BASE + this.url, {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
                'Authorization': authentification_1.default.getAuthorizationHeader()
              }
            })];

          case 1:
            response = _a.sent();
            return [4
            /*yield*/
            , response.json()];

          case 2:
            return [2
            /*return*/
            , _a.sent()];
        }
      });
    });
  };

  BaseRepository.prototype.getById = function (id) {
    return __awaiter(this, void 0, void 0, function () {
      var response;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [4
            /*yield*/
            , fetch("" + constants_1.URL_BASE + this.url + "/" + id, {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
                'Authorization': authentification_1.default.getAuthorizationHeader()
              }
            })];

          case 1:
            response = _a.sent();
            return [4
            /*yield*/
            , response.json()];

          case 2:
            return [2
            /*return*/
            , _a.sent()];
        }
      });
    });
  };

  BaseRepository.prototype.addItem = function (item) {
    return __awaiter(this, void 0, void 0, function () {
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [4
            /*yield*/
            , fetch("" + constants_1.URL_BASE + this.url, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                'Authorization': authentification_1.default.getAuthorizationHeader()
              },
              body: JSON.stringify(item)
            })];

          case 1:
            _a.sent();

            return [2
            /*return*/
            ];
        }
      });
    });
  };

  BaseRepository.prototype.editItem = function (id, item) {
    return __awaiter(this, void 0, void 0, function () {
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [4
            /*yield*/
            , fetch("" + constants_1.URL_BASE + this.url + "/" + id, {
              method: 'PUT',
              headers: {
                'Content-Type': 'application/json',
                'Authorization': authentification_1.default.getAuthorizationHeader()
              },
              body: JSON.stringify(item)
            })];

          case 1:
            _a.sent();

            return [2
            /*return*/
            ];
        }
      });
    });
  };

  BaseRepository.prototype.deleteItem = function (id) {
    return __awaiter(this, void 0, void 0, function () {
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [4
            /*yield*/
            , fetch("" + constants_1.URL_BASE + this.url + "/" + id, {
              method: 'DELETE',
              headers: {
                'Content-Type': 'application/json',
                'Authorization': authentification_1.default.getAuthorizationHeader()
              }
            })];

          case 1:
            _a.sent();

            return [2
            /*return*/
            ];
        }
      });
    });
  };

  return BaseRepository;
}();

exports.default = BaseRepository;
},{"../constants":"scripts/constants.ts","../authentification":"scripts/authentification.ts"}],"scripts/repositories/userRepository.ts":[function(require,module,exports) {
"use strict";

var __extends = this && this.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var constants_1 = require("../constants");

var baseRepository_1 = __importDefault(require("./baseRepository"));

var UsersRepository =
/** @class */
function (_super) {
  __extends(UsersRepository, _super);

  function UsersRepository() {
    return _super.call(this, constants_1.URL_USERS) || this;
  }

  return UsersRepository;
}(baseRepository_1.default);

exports.default = new UsersRepository();
},{"../constants":"scripts/constants.ts","./baseRepository":"scripts/repositories/baseRepository.ts"}],"scripts/views/users/usersEditPage.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var events_1 = require("../../events");

function usersEditPage() {
  return {
    template: "<input type=\"hidden\" id=\"id\" name=\"id\" />\n    \n    <fieldset>\n        <legend>User</legend>\n        <table>\n            <tr>\n                <td>Username:</td>\n                <td><input type=\"text\" id=\"username\" name=\"username\" placeholder=\"username\" /></td>\n            </tr>\n            <tr>\n                <td>Password:</td>\n                <td><input type=\"password\" id=\"password\" name=\"password\" placeholder=\"password\" /></td>\n            </tr>\n            <tr>\n                <td>First Name:</td>\n                <td><input type=\"text\" id=\"firstName\" name=\"firstName\" placeholder=\"First Name\" /></td>\n            </tr>\n            <tr>\n                <td>Last Name:</td>\n                <td><input type=\"text\" id=\"lastName\" name=\"lastName\" placeholder=\"Last Name\" /></td>\n            </tr>\n            <tr>\n                <td>Is admin:</td>\n                <td><input type=\"checkbox\" id=\"isAdmin\" name=\"isAdmin\" /></td>\n            </tr>\n            \n            <tr>\n                <td colspan=\"2\"><input id=\"editBtnUser\" class=\"button\" type=\"button\" value=\"Save\" /></td>\n            </tr>\n        </table>\n    </fieldset>",
    listeners: [{
      targetId: 'editBtnUser',
      eventType: 'click',
      callback: events_1.usersEditForm_Submit
    }]
  };
}

exports.default = usersEditPage;
},{"../../events":"scripts/events.ts"}],"scripts/views/users/usersPage.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var events_1 = require("../../events");

function usersPage() {
  return {
    template: "<button id=\"newUserLink\" class=\"button\" >New</button>\n    <fieldset>\n    <table id=\"usersTable\">\n        <tr>\n            <th>User ID</th>\n            <th>Username</th>\n            <th>Password</th>\n            <th>First Name</th>\n            <th>Last Name</th>\n            <th>Is admin</th>\n            <th>Creation date</th>\n            <th>Creator ID</th>\n            <th>Last change</th>\n            <th>Did the last change ID</th>\n            \n        </tr>         \n    </table>\n    <?fieldset>",
    listeners: [{
      targetId: 'newUserLink',
      eventType: 'click',
      callback: events_1.usersEditLink_Click
    }]
  };
}

exports.default = usersPage;
},{"../../events":"scripts/events.ts"}],"scripts/views/users/index.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var usersEditPage_1 = require("./usersEditPage");

exports.usersEditPage = usersEditPage_1.default;

var usersPage_1 = require("./usersPage");

exports.usersPage = usersPage_1.default;
},{"./usersEditPage":"scripts/views/users/usersEditPage.ts","./usersPage":"scripts/views/users/usersPage.ts"}],"scripts/entities/user.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var User =
/** @class */
function () {
  function User(username, password, firstName, lastName, isAdmin) {
    this.username = username;
    this.password = password;
    this.firstName = firstName;
    this.lastName = lastName;
    this.isAdmin = isAdmin;
  }

  return User;
}();

exports.default = User;
},{}],"scripts/views/todos/toDoEditPage.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var events_1 = require("../../events");

function toDoDetailPage() {
  return {
    template: "<input type=\"hidden\" id=\"id\" name=\"id\" />\n    <fieldset>\n        <legend>Title</legend>\n        <table>\n            <tr>\n                <td>To-Do:</td>\n                <td><input type=\"text\" id=\"title\" name=\"title\"  /></td>\n            </tr>    \n            <tr>\n                <td colspan=\"2\"><input id=\"saveBtn\" class=\"button\" type=\"button\" value=\"Save\" /></td>\n            </tr>\n        </table>\n    </fieldset>",
    listeners: [{
      targetId: 'saveBtn',
      eventType: 'click',
      callback: events_1.toDosEditForm_Submit
    }]
  };
}

exports.default = toDoDetailPage;
},{"../../events":"scripts/events.ts"}],"scripts/views/todos/toDoPage.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var events_1 = require("../../events");

function toDoPage() {
  return {
    template: "<button id=\"newTodoLink\" class=\"button\" >New</button>\n    <fieldset>\n    <legend>TO-Do</legend>\n    <table id=\"toDoTable\">\n        <tr>\n            <th>List Id</th>\n            <th>Title</th>\n            <th>Creation Date</th>\n            <th>Creator ID</th>\n            <th>Last change</th>\n            <th>Did the last change ID</th>\n            <td class=\"button\"></td>\n            <td class=\"button\"></td>\n            <td class=\"button\"></td>\n            \n        </tr>         \n    </table>\n    <?fieldset>",
    listeners: [{
      targetId: 'newTodoLink',
      eventType: 'click',
      callback: events_1.toDoEditLink_Click
    }]
  };
}

exports.default = toDoPage;
},{"../../events":"scripts/events.ts"}],"scripts/views/todos/todoTaskPage.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function todoTasksPage() {
  return {
    template: "\n    <fieldset>\n    <legend>Tasks</legend>\n    <table id=\"TasksTable\">\n    <button style=\"float:right;\" class=\"button\" id=\"newTaskLink\">New</button>\n        <tr>\n            <td>Task ID</td>\n            <td>List ID</td>\n            <td>Title</td>\n            <td>Description</td>\n            <td>Creation Date</td>\n            <td>Creator ID</td>\n            <td>Last Change</td>\n            <th>Did the last change ID</th>\n            <th>Is Complete</th>        \n            <td class=\"button\"></td>\n            <td class=\"button\"></td>\n        </tr>\n    </table>\n    </fieldset>",
    listeners: []
  };
}

exports.default = todoTasksPage;
},{}],"scripts/views/todos/index.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var toDoEditPage_1 = require("./toDoEditPage");

exports.toDoEditPage = toDoEditPage_1.default;

var toDoPage_1 = require("./toDoPage");

exports.toDoPage = toDoPage_1.default;

var todoTaskPage_1 = require("./todoTaskPage");

exports.todoTaskPage = todoTaskPage_1.default;
},{"./toDoEditPage":"scripts/views/todos/toDoEditPage.ts","./toDoPage":"scripts/views/todos/toDoPage.ts","./todoTaskPage":"scripts/views/todos/todoTaskPage.ts"}],"scripts/repositories/tasksRepository.ts":[function(require,module,exports) {
"use strict";

var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

var __generator = this && this.__generator || function (thisArg, body) {
  var _ = {
    label: 0,
    sent: function sent() {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) {
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
        if (y = 0, t) op = [op[0] & 2, t.value];

        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;

          case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;

          case 7:
            op = _.ops.pop();

            _.trys.pop();

            continue;

          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }

            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }

            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }

            if (t && _.label < t[2]) {
              _.label = t[2];

              _.ops.push(op);

              break;
            }

            if (t[2]) _.ops.pop();

            _.trys.pop();

            continue;
        }

        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var constants_1 = require("../constants");

var authentification_1 = __importDefault(require("../authentification"));

var TasksRepository =
/** @class */
function () {
  function TasksRepository() {}

  TasksRepository.prototype.getAll = function (id) {
    return __awaiter(this, void 0, void 0, function () {
      var response;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [4
            /*yield*/
            , fetch("" + constants_1.URL_BASE + constants_1.URL_TODOS + "/" + id + constants_1.URL_TASKS, {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
                'Authorization': authentification_1.default.getAuthorizationHeader()
              }
            })];

          case 1:
            response = _a.sent();
            return [4
            /*yield*/
            , response.json()];

          case 2:
            return [2
            /*return*/
            , _a.sent()];
        }
      });
    });
  };

  TasksRepository.prototype.getById = function (listId, taskId) {
    return __awaiter(this, void 0, void 0, function () {
      var response;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [4
            /*yield*/
            , fetch("" + constants_1.URL_BASE + constants_1.URL_TODOS + "/" + listId + constants_1.URL_TASKS + "/" + taskId, {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
                'Authorization': authentification_1.default.getAuthorizationHeader()
              }
            })];

          case 1:
            response = _a.sent();
            return [4
            /*yield*/
            , response.json()];

          case 2:
            return [2
            /*return*/
            , _a.sent()];
        }
      });
    });
  };

  TasksRepository.prototype.addItem = function (item, listId) {
    return __awaiter(this, void 0, void 0, function () {
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [4
            /*yield*/
            , fetch("" + constants_1.URL_BASE + constants_1.URL_TODOS + "/" + listId + constants_1.URL_TASKS, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                'Authorization': authentification_1.default.getAuthorizationHeader()
              },
              body: JSON.stringify(item)
            })];

          case 1:
            _a.sent();

            return [2
            /*return*/
            ];
        }
      });
    });
  };

  TasksRepository.prototype.editItem = function (item, listId, taskId) {
    return __awaiter(this, void 0, void 0, function () {
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [4
            /*yield*/
            , fetch("" + constants_1.URL_BASE + constants_1.URL_TODOS + "/" + listId + constants_1.URL_TASKS + "/" + taskId, {
              method: 'PUT',
              headers: {
                'Content-Type': 'application/json',
                'Authorization': authentification_1.default.getAuthorizationHeader()
              },
              body: JSON.stringify(item)
            })];

          case 1:
            _a.sent();

            return [2
            /*return*/
            ];
        }
      });
    });
  };

  TasksRepository.prototype.deleteItem = function (listId, taskId) {
    return __awaiter(this, void 0, void 0, function () {
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [4
            /*yield*/
            , fetch("" + constants_1.URL_BASE + constants_1.URL_TODOS + "/" + listId + constants_1.URL_TASKS + "/" + taskId, {
              method: 'DELETE',
              headers: {
                'Content-Type': 'application/json',
                'Authorization': authentification_1.default.getAuthorizationHeader()
              }
            })];

          case 1:
            _a.sent();

            return [2
            /*return*/
            ];
        }
      });
    });
  };

  return TasksRepository;
}();

exports.default = new TasksRepository();
},{"../constants":"scripts/constants.ts","../authentification":"scripts/authentification.ts"}],"scripts/entities/task.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Task =
/** @class */
function () {
  function Task(title, description, isComplete) {
    this.title = title;
    this.description = description;
    this.isComplete = isComplete;
  }

  return Task;
}();

exports.default = Task;
},{}],"scripts/repositories/toDoRepository.ts":[function(require,module,exports) {
"use strict";

var __extends = this && this.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var constants_1 = require("../constants");

var baseRepository_1 = __importDefault(require("./baseRepository"));

var ToDoRepository =
/** @class */
function (_super) {
  __extends(ToDoRepository, _super);

  function ToDoRepository() {
    return _super.call(this, constants_1.URL_TODOS) || this;
  }

  return ToDoRepository;
}(baseRepository_1.default);

exports.default = new ToDoRepository();
},{"../constants":"scripts/constants.ts","./baseRepository":"scripts/repositories/baseRepository.ts"}],"scripts/views/tasks/tasksEditPage.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var events_1 = require("../../events");

function tasksEditPage() {
  return {
    template: "<input type=\"hidden\" id=\"id\" name=\"id\" />\n    <input type=\"hidden\" id=\"todoId\" name=\"todoId\" />\n    <fieldset>\n        <legend>Task</legend>\n        <table>\n            <tr>\n                <td>Title:</td>\n                <td><input type=\"text\" id=\"task\" name=\"task\" placeholder=\"title\" /></td>\n            </tr>\n            <tr>\n                <td>Description:</td>\n                <td><input type=\"text\" id=\"description\" name=\"description\" placeholder=\"description\" /></td>\n            </tr>\n\n            <tr>\n                <td>Is Complete:</td>\n                <td><input type=\"checkbox\" id=\"isComplete\" name=\"isComplete\" /></td>\n            </tr>\n            \n            <tr>\n                <td colspan=\"2\"><input id=\"newTaskSaveBtn\" class=\"button\" type=\"button\" value=\"Save\" /></td>\n            </tr>\n        </table>\n    </fieldset>",
    listeners: [{
      targetId: 'newTaskSaveBtn',
      eventType: 'click',
      callback: events_1.taskEditForm_Submit
    }]
  };
}

exports.default = tasksEditPage;
},{"../../events":"scripts/events.ts"}],"scripts/views/tasks/index.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var tasksEditPage_1 = require("./tasksEditPage");

exports.tasksEditPage = tasksEditPage_1.default;
},{"./tasksEditPage":"scripts/views/tasks/tasksEditPage.ts"}],"scripts/entities/ToDo.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var ToDo =
/** @class */
function () {
  function ToDo(title) {
    this.title = title;
  }

  return ToDo;
}();

exports.default = ToDo;
},{}],"scripts/views/loginPage.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var events_1 = require("../events");

function loginPage() {
  return {
    template: "<fieldset>\n    <legend>Login</legend>\n    <table>\n        <tr>\n            <td style=\"color: red;\" id=\"error\"></td>\n        </tr>\n        <tr>\n            <td>Username:</td>\n            <td><input id=\"username\" type=\"text\" name=\"username\" placeholder=\"username\"  /></td>\n        </tr>\n        <tr>\n            <td>Password:</td>\n            <td><input id=\"password\" type=\"password\" name=\"password\" placeholder=\"password\" /></td>\n        </tr>\n        <tr>\n            <td colspan=\"2\"><input id=\"loginBtn\" class=\"button\" type=\"button\"  value=\"Login\" /></td>\n        </tr>\n    </table>\n</fieldset>",
    listeners: [{
      targetId: 'loginBtn',
      eventType: 'click',
      callback: events_1.loginForm_Submit
    }]
  };
}

exports.default = loginPage;
},{"../events":"scripts/events.ts"}],"scripts/events.ts":[function(require,module,exports) {
"use strict";

var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

var __generator = this && this.__generator || function (thisArg, body) {
  var _ = {
    label: 0,
    sent: function sent() {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) {
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
        if (y = 0, t) op = [op[0] & 2, t.value];

        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;

          case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;

          case 7:
            op = _.ops.pop();

            _.trys.pop();

            continue;

          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }

            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }

            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }

            if (t && _.label < t[2]) {
              _.label = t[2];

              _.ops.push(op);

              break;
            }

            if (t[2]) _.ops.pop();

            _.trys.pop();

            continue;
        }

        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var userRepository_1 = __importDefault(require("./repositories/userRepository"));

var users_1 = require("./views/users/");

var user_1 = __importDefault(require("./entities/user"));

var todos_1 = require("./views/todos");

var authentification_1 = __importDefault(require("./authentification"));

var tasksRepository_1 = __importDefault(require("./repositories/tasksRepository"));

var task_1 = __importDefault(require("./entities/task"));

var toDoRepository_1 = __importDefault(require("./repositories/toDoRepository"));

var index_1 = require("./views/tasks/index");

var ToDo_1 = __importDefault(require("./entities/ToDo"));

var homePage_1 = __importStar(require("./views/homePage"));

var loginPage_1 = __importDefault(require("./views/loginPage"));

function render(renderData) {
  var contentDiv = document.getElementById('content');
  contentDiv.innerHTML = renderData.template;

  if (renderData && renderData.listeners && renderData.listeners.length) {
    for (var _i = 0, _a = renderData.listeners; _i < _a.length; _i++) {
      var listener = _a[_i];
      var target = document.getElementById(listener.targetId);
      target.addEventListener(listener.eventType, listener.callback);
    }
  }
}

exports.render = render;

function handleMenu() {
  var loggedUser = authentification_1.default.getLoggedUser();
  var homeLink = document.getElementById('homeLink');
  homeLink.addEventListener('click', homeLink_Click);
  var loginLink = document.getElementById('loginLink');
  loginLink.addEventListener('click', loginLink_Click);
  var usersLink = document.getElementById('usersLink');
  usersLink.addEventListener('click', usersLink_Click);
  var todoLink = document.getElementById('todoLink');
  todoLink.addEventListener('click', toDosLink_Click);
  var logoutLink = document.getElementById('logoutLink');
  logoutLink.addEventListener('click', logoutLink_Click);

  if (loggedUser == null) {
    loginLink.style.display = '';
    usersLink.style.display = 'none';
    todoLink.style.display = 'none';
    logoutLink.style.display = 'none';
  } else {
    loginLink.style.display = 'none';
    usersLink.style.display = loggedUser.isAdmin ? '' : 'none';
    todoLink.style.display = '';
    logoutLink.style.display = '';
  }
}

exports.handleMenu = handleMenu;

function homeLink_Click() {
  render(homePage_1.default());
}

exports.homeLink_Click = homeLink_Click; //loadTodos

function toDosLink_Click() {
  return __awaiter(this, void 0, void 0, function () {
    var toDoTable, items, _loop_1, i;

    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          render(todos_1.toDoPage());
          toDoTable = document.getElementById('toDoTable');
          return [4
          /*yield*/
          , toDoRepository_1.default.getAll()];

        case 1:
          items = _a.sent();
          if (items == null) return [2
          /*return*/
          ];

          _loop_1 = function _loop_1(i) {
            var currentItem = items[i];
            var tr = document.createElement('TR');
            var listIdTd = document.createElement('TD');
            listIdTd.innerHTML = currentItem.id;
            var titleTd = document.createElement('TD');
            titleTd.innerHTML = currentItem.title;
            var createdTd = document.createElement('TD');
            createdTd.innerHTML = currentItem.createDate;
            var creatorIdTd = document.createElement('TD');
            creatorIdTd.innerHTML = currentItem.creatorId;
            var updateTd = document.createElement('TD');
            updateTd.innerHTML = currentItem.updateDate;
            var lastChangeUserIdTd = document.createElement('TD');
            lastChangeUserIdTd.innerHTML = currentItem.updaterId;
            var editTd = document.createElement('TD');
            var editButton = document.createElement('button');
            editButton.innerHTML = 'EDIT';
            editButton.addEventListener('click', function () {
              return toDoEditButton_Click(currentItem.id);
            });
            editTd.appendChild(editButton);
            var TasksTd = document.createElement('TD');
            var TasksButton = document.createElement('BUTTON');
            TasksButton.innerHTML = 'TASKS';
            TasksButton.addEventListener('click', function () {
              return toDoTasksButton_Click(currentItem.id);
            });
            TasksTd.appendChild(TasksButton);
            var deleteTd = document.createElement('TD');
            var deleteButton = document.createElement('BUTTON');
            deleteButton.innerHTML = 'DELETE';
            deleteButton.addEventListener('click', function () {
              return toDoDeleteButton_Click(currentItem.id);
            });
            deleteTd.appendChild(deleteButton);
            var childAppend = [listIdTd, titleTd, createdTd, creatorIdTd, updateTd, lastChangeUserIdTd, editTd, TasksTd, deleteTd];

            for (var j = 0; j < childAppend.length; j++) {
              tr.appendChild(childAppend[j]);
            }

            toDoTable.appendChild(tr);
          };

          for (i = 0; i < items.length; i++) {
            _loop_1(i);
          }

          return [2
          /*return*/
          ];
      }
    });
  });
}

exports.toDosLink_Click = toDosLink_Click;

function toDoEditLink_Click() {
  return __awaiter(this, void 0, void 0, function () {
    return __generator(this, function (_a) {
      render(todos_1.toDoEditPage());
      return [2
      /*return*/
      ];
    });
  });
}

exports.toDoEditLink_Click = toDoEditLink_Click;

function toDoEditButton_Click(id) {
  return __awaiter(this, void 0, void 0, function () {
    var item;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          return [4
          /*yield*/
          , toDoEditLink_Click()];

        case 1:
          _a.sent();

          return [4
          /*yield*/
          , toDoRepository_1.default.getById(id)];

        case 2:
          item = _a.sent();
          document.getElementById('id').value = item.id;
          document.getElementById('title').value = item.title;
          return [2
          /*return*/
          ];
      }
    });
  });
}

exports.toDoEditButton_Click = toDoEditButton_Click;

function toDoDeleteButton_Click(id) {
  return __awaiter(this, void 0, void 0, function () {
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          return [4
          /*yield*/
          , toDoRepository_1.default.deleteItem(id)];

        case 1:
          _a.sent();

          return [4
          /*yield*/
          , toDosLink_Click()];

        case 2:
          _a.sent();

          return [2
          /*return*/
          ];
      }
    });
  });
}

exports.toDoDeleteButton_Click = toDoDeleteButton_Click;

function toDosEditForm_Submit() {
  return __awaiter(this, void 0, void 0, function () {
    var id, title, item;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          id = document.getElementById('id').value;
          title = document.getElementById('title').value;
          item = new ToDo_1.default(title);
          if (!(id == "")) return [3
          /*break*/
          , 2];
          return [4
          /*yield*/
          , toDoRepository_1.default.addItem(item)];

        case 1:
          _a.sent();

          return [3
          /*break*/
          , 4];

        case 2:
          return [4
          /*yield*/
          , toDoRepository_1.default.editItem(id, item)];

        case 3:
          _a.sent();

          _a.label = 4;

        case 4:
          return [4
          /*yield*/
          , toDosLink_Click()];

        case 5:
          _a.sent();

          return [2
          /*return*/
          ];
      }
    });
  });
}

exports.toDosEditForm_Submit = toDosEditForm_Submit;

function toDoTasksButton_Click(id) {
  return __awaiter(this, void 0, void 0, function () {
    var newTaskBtn, tasksTable, tasks, _loop_2, i;

    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          render(todos_1.todoTaskPage());
          newTaskBtn = document.getElementById('newTaskLink');
          newTaskBtn.addEventListener('click', function () {
            return tasksEditLink_Click(id);
          });
          tasksTable = document.getElementById('TasksTable');
          return [4
          /*yield*/
          , tasksRepository_1.default.getAll(id)];

        case 1:
          tasks = _a.sent();
          if (tasks == null || undefined || 0) return [2
          /*return*/
          ];

          _loop_2 = function _loop_2(i) {
            var currentTask = tasks[i];
            var tr = document.createElement('TR');
            var taskIdTd = document.createElement('TD');
            taskIdTd.innerHTML = currentTask.id;
            var listIdTd = document.createElement('TD');
            listIdTd.innerHTML = currentTask.taskListId;
            var taskTd = document.createElement('TD');
            taskTd.innerHTML = currentTask.title;
            var descriptionTd = document.createElement('TD');
            descriptionTd.innerHTML = currentTask.description;
            var creationDateTd = document.createElement('TD');
            creationDateTd.innerHTML = currentTask.creationDate;
            var creatorIdTd = document.createElement('TD');
            creatorIdTd.innerHTML = currentTask.creatorId;
            var lastChangeDateTd = document.createElement('TD');
            lastChangeDateTd.innerHTML = currentTask.updateDate;
            var lastChangeUserIdTd = document.createElement('TD');
            lastChangeUserIdTd.innerHTML = currentTask.updaterId;
            var isCompleteTd = document.createElement('TD');
            isCompleteTd.innerHTML = currentTask.isComplete;
            var editTd = document.createElement('TD');
            var editButton = document.createElement('BUTTON');
            editButton.innerHTML = 'EDIT';
            editButton.addEventListener('click', function () {
              return tasksEditButton_Click(currentTask.taskListId, currentTask.id);
            });
            editTd.appendChild(editButton);
            var deleteTd = document.createElement('TD');
            var deleteButton = document.createElement('BUTTON');
            deleteButton.innerHTML = 'DELETE';
            deleteButton.addEventListener('click', function () {
              return tasksDeleteButton_Click(currentTask.taskListId, currentTask.id);
            });
            deleteTd.appendChild(deleteButton);
            var taskToAppend = [taskIdTd, listIdTd, taskTd, descriptionTd, creationDateTd, creatorIdTd, lastChangeDateTd, lastChangeUserIdTd, isCompleteTd, editTd, deleteTd];

            for (var k = 0; k < taskToAppend.length; k++) {
              tr.appendChild(taskToAppend[k]);
            }

            tasksTable.appendChild(tr);
          };

          for (i = 0; i < tasks.length; i++) {
            _loop_2(i);
          }

          return [2
          /*return*/
          ];
      }
    });
  });
}

exports.toDoTasksButton_Click = toDoTasksButton_Click;

function tasksEditLink_Click(id) {
  return __awaiter(this, void 0, void 0, function () {
    return __generator(this, function (_a) {
      render(index_1.tasksEditPage());
      document.getElementById('todoId').value = id;
      return [2
      /*return*/
      ];
    });
  });
}

exports.tasksEditLink_Click = tasksEditLink_Click;

function tasksEditButton_Click(listId, id) {
  return __awaiter(this, void 0, void 0, function () {
    var item;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          render(index_1.tasksEditPage());
          return [4
          /*yield*/
          , tasksRepository_1.default.getById(listId, id)];

        case 1:
          item = _a.sent();
          document.getElementById('id').value = item.id;
          document.getElementById('todoId').value = item.taskListId;
          document.getElementById('task').value = item.title;
          document.getElementById('description').value = item.description;
          document.getElementById('isComplete').checked = item.isComplete;
          return [2
          /*return*/
          ];
      }
    });
  });
}

exports.tasksEditButton_Click = tasksEditButton_Click;

function taskEditForm_Submit() {
  return __awaiter(this, void 0, void 0, function () {
    var id, todoId, task, description, isComplete, item;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          id = document.getElementById('id').value;
          todoId = document.getElementById('todoId').value;
          task = document.getElementById('task').value;
          description = document.getElementById('description').value;
          isComplete = document.getElementById('isComplete').checked;
          item = new task_1.default(task, description, isComplete);
          if (!(id == "")) return [3
          /*break*/
          , 2];
          return [4
          /*yield*/
          , tasksRepository_1.default.addItem(item, todoId)];

        case 1:
          _a.sent();

          return [3
          /*break*/
          , 4];

        case 2:
          return [4
          /*yield*/
          , tasksRepository_1.default.editItem(item, todoId, id)];

        case 3:
          _a.sent();

          _a.label = 4;

        case 4:
          return [4
          /*yield*/
          , toDoTasksButton_Click(todoId)];

        case 5:
          _a.sent();

          return [2
          /*return*/
          ];
      }
    });
  });
}

exports.taskEditForm_Submit = taskEditForm_Submit;

function tasksDeleteButton_Click(listId, id) {
  return __awaiter(this, void 0, void 0, function () {
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          return [4
          /*yield*/
          , tasksRepository_1.default.deleteItem(listId, id)];

        case 1:
          _a.sent();

          return [4
          /*yield*/
          , toDoTasksButton_Click(listId)];

        case 2:
          _a.sent();

          return [2
          /*return*/
          ];
      }
    });
  });
}

exports.tasksDeleteButton_Click = tasksDeleteButton_Click;

function usersLink_Click() {
  return __awaiter(this, void 0, void 0, function () {
    var usersTable, items, _loop_3, i;

    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          render(users_1.usersPage());
          usersTable = document.getElementById('usersTable');
          return [4
          /*yield*/
          , userRepository_1.default.getAll()];

        case 1:
          items = _a.sent();
          if (items == null) return [2
          /*return*/
          ];

          _loop_3 = function _loop_3(i) {
            var currentItem = items[i];
            var tr = document.createElement('TR');
            var userIdTd = document.createElement('TD');
            userIdTd.innerHTML = currentItem.id;
            var usernameTd = document.createElement('TD');
            usernameTd.innerHTML = currentItem.username;
            var passwordTd = document.createElement('TD');
            passwordTd.innerHTML = currentItem.password;
            var firstNameTd = document.createElement('TD');
            firstNameTd.innerHTML = currentItem.firstName;
            var lastNameTd = document.createElement('TD');
            lastNameTd.innerHTML = currentItem.lastName;
            var isAdminTd = document.createElement('TD');
            isAdminTd.innerHTML = currentItem.isAdmin;
            var createdTd = document.createElement('TD');
            createdTd.innerHTML = currentItem.createDate;
            var creatorIdTd = document.createElement('TD');
            creatorIdTd.innerHTML = currentItem.creatorId;
            var updateTd = document.createElement('TD');
            updateTd.innerHTML = currentItem.updateDate;
            var lastChangeUserIdTd = document.createElement('TD');
            lastChangeUserIdTd.innerHTML = currentItem.updaterId;
            var editTd = document.createElement('TD');
            var editButton = document.createElement('BUTTON');
            editButton.innerHTML = 'EDIT';
            editButton.addEventListener('click', function () {
              return usersEditButton_Click(currentItem.id);
            });
            editTd.appendChild(editButton);
            var deleteTd = document.createElement('TD');
            var deleteButton = document.createElement('BUTTON');
            deleteButton.innerHTML = 'DELETE';
            deleteButton.addEventListener('click', function () {
              return usersDeleteButton_Click(currentItem.id);
            });
            deleteTd.appendChild(deleteButton);
            var usersToAppend = [userIdTd, usernameTd, passwordTd, firstNameTd, lastNameTd, isAdminTd, createdTd, creatorIdTd, updateTd, lastChangeUserIdTd, editTd, deleteTd];

            for (var e = 0; e < usersToAppend.length; e++) {
              tr.appendChild(usersToAppend[e]);
            }

            usersTable.appendChild(tr);
          };

          for (i = 0; i < items.length; i++) {
            _loop_3(i);
          }

          return [2
          /*return*/
          ];
      }
    });
  });
}

exports.usersLink_Click = usersLink_Click;

function usersEditLink_Click() {
  return __awaiter(this, void 0, void 0, function () {
    return __generator(this, function (_a) {
      render(users_1.usersEditPage());
      return [2
      /*return*/
      ];
    });
  });
}

exports.usersEditLink_Click = usersEditLink_Click;

function usersEditButton_Click(id) {
  return __awaiter(this, void 0, void 0, function () {
    var item;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          return [4
          /*yield*/
          , usersEditLink_Click()];

        case 1:
          _a.sent();

          return [4
          /*yield*/
          , userRepository_1.default.getById(id)];

        case 2:
          item = _a.sent();
          document.getElementById('id').value = item.id;
          document.getElementById('username').value = item.username;
          document.getElementById('password').value = item.password;
          document.getElementById('firstName').value = item.firstName;
          document.getElementById('lastName').value = item.lastName;
          document.getElementById('isAdmin').checked = item.isAdmin;
          return [2
          /*return*/
          ];
      }
    });
  });
}

exports.usersEditButton_Click = usersEditButton_Click;

function usersEditForm_Submit() {
  return __awaiter(this, void 0, void 0, function () {
    var id, username, password, firstName, lastName, isAdmin, item;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          id = document.getElementById('id').value;
          username = document.getElementById('username').value;
          password = document.getElementById('password').value;
          firstName = document.getElementById('firstName').value;
          lastName = document.getElementById('lastName').value;
          isAdmin = document.getElementById('isAdmin').checked;
          item = new user_1.default(username, password, firstName, lastName, isAdmin);
          if (!(id == "")) return [3
          /*break*/
          , 2];
          return [4
          /*yield*/
          , userRepository_1.default.addItem(item)];

        case 1:
          _a.sent();

          return [3
          /*break*/
          , 4];

        case 2:
          return [4
          /*yield*/
          , userRepository_1.default.editItem(id, item)];

        case 3:
          _a.sent();

          _a.label = 4;

        case 4:
          return [4
          /*yield*/
          , usersLink_Click()];

        case 5:
          _a.sent();

          return [2
          /*return*/
          ];
      }
    });
  });
}

exports.usersEditForm_Submit = usersEditForm_Submit;

function usersDeleteButton_Click(id) {
  return __awaiter(this, void 0, void 0, function () {
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          return [4
          /*yield*/
          , userRepository_1.default.deleteItem(id)];

        case 1:
          _a.sent();

          return [4
          /*yield*/
          , usersLink_Click()];

        case 2:
          _a.sent();

          return [2
          /*return*/
          ];
      }
    });
  });
}

exports.usersDeleteButton_Click = usersDeleteButton_Click;

function loginLink_Click() {
  return __awaiter(this, void 0, void 0, function () {
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          return [4
          /*yield*/
          , render(loginPage_1.default())];

        case 1:
          _a.sent();

          return [2
          /*return*/
          ];
      }
    });
  });
}

exports.loginLink_Click = loginLink_Click;

function loginForm_Submit() {
  return __awaiter(this, void 0, void 0, function () {
    var username, password, loggedUser;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          username = document.getElementById('username').value;
          password = document.getElementById('password').value;
          return [4
          /*yield*/
          , authentification_1.default.authenticate(username, password)];

        case 1:
          _a.sent();

          return [4
          /*yield*/
          , authentification_1.default.getLoggedUser()];

        case 2:
          loggedUser = _a.sent();

          if (loggedUser != null) {
            render(homePage_1.homePageAfterLogin());
            handleMenu();
          } else {
            document.getElementById('error').innerHTML = "User doesn't exist";
          }

          return [2
          /*return*/
          ];
      }
    });
  });
}

exports.loginForm_Submit = loginForm_Submit;

function logoutLink_Click() {
  return __awaiter(this, void 0, void 0, function () {
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          return [4
          /*yield*/
          , authentification_1.default.logout()];

        case 1:
          _a.sent();

          handleMenu();
          render(homePage_1.homePageAfterLogout());
          return [2
          /*return*/
          ];
      }
    });
  });
}

exports.logoutLink_Click = logoutLink_Click;
},{"./repositories/userRepository":"scripts/repositories/userRepository.ts","./views/users/":"scripts/views/users/index.ts","./entities/user":"scripts/entities/user.ts","./views/todos":"scripts/views/todos/index.ts","./authentification":"scripts/authentification.ts","./repositories/tasksRepository":"scripts/repositories/tasksRepository.ts","./entities/task":"scripts/entities/task.ts","./repositories/toDoRepository":"scripts/repositories/toDoRepository.ts","./views/tasks/index":"scripts/views/tasks/index.ts","./entities/ToDo":"scripts/entities/ToDo.ts","./views/homePage":"scripts/views/homePage.ts","./views/loginPage":"scripts/views/loginPage.ts"}],"scripts/index.ts":[function(require,module,exports) {
"use strict";

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var homePage_1 = __importDefault(require("./views/homePage"));

var events_1 = require("./events");

window.addEventListener('DOMContentLoaded', init);

function init() {
  events_1.render(homePage_1.default());
  events_1.handleMenu();
}
},{"./views/homePage":"scripts/views/homePage.ts","./events":"scripts/events.ts"}],"node_modules/parcel/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "54223" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel/src/builtins/hmr-runtime.js","scripts/index.ts"], null)
//# sourceMappingURL=/scripts.2ed900e3.js.map