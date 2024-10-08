"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parse = parse;
exports.parseDefaults = void 0;
exports.stringify = stringify;
var _lexer = _interopRequireDefault(require("./lexer"));
var _parser = _interopRequireDefault(require("./parser"));
var _format = require("./format");
var _stringify = require("./stringify");
var _tags = require("./tags");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var parseDefaults = {
  voidTags: _tags.voidTags,
  closingTags: _tags.closingTags,
  childlessTags: _tags.childlessTags,
  closingTagAncestorBreakers: _tags.closingTagAncestorBreakers,
  includePositions: false
};
exports.parseDefaults = parseDefaults;
function parse(str) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : parseDefaults;
  var tokens = (0, _lexer["default"])(str, options);
  var nodes = (0, _parser["default"])(tokens, options);
  return (0, _format.format)(nodes, options);
}
function stringify(ast) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : parseDefaults;
  return (0, _stringify.toHTML)(ast, options);
}
//# sourceMappingURL=index.js.map
