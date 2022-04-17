"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.__password__ = exports.__user__ = exports.__prod__ = void 0;
exports.__prod__ = process.env.NODE_ENV === 'production';
exports.__user__ = process.env.USER === 'andipiee';
exports.__password__ = process.env.PASSWORD === 'star13star';
//# sourceMappingURL=constants.js.map