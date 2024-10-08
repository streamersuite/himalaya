"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
exports.formatAttributes = formatAttributes;
exports.toHTML = toHTML;
var _compat = require("./compat");
function formatAttributes(attributes) {
  return attributes.reduce(function (attrs, attribute) {
    var key = attribute.key,
      value = attribute.value;
    if (value === null) {
      return "".concat(attrs, " ").concat(key);
    }
    var quoteEscape = value.indexOf("'") !== -1;
    var quote = quoteEscape ? '"' : "'";
    return "".concat(attrs, " ").concat(key, "=").concat(quote).concat(value).concat(quote);
  }, '');
}
function toHTML(tree, options) {
  return tree.map(function (node) {
    if (node.type === 'text') {
      return node.content;
    }
    if (node.type === 'comment') {
      return "<!--".concat(node.content, "-->");
    }
    var tagName = node.tagName,
      attributes = node.attributes,
      children = node.children;
    var isSelfClosing = (0, _compat.arrayIncludes)(options.voidTags, tagName.toLowerCase());
    return isSelfClosing ? "<".concat(tagName).concat(formatAttributes(attributes), ">") : "<".concat(tagName).concat(formatAttributes(attributes), ">").concat(toHTML(children, options), "</").concat(tagName, ">");
  }).join('');
}
var _default = {
  toHTML: toHTML
};
exports["default"] = _default;
//# sourceMappingURL=stringify.js.map
