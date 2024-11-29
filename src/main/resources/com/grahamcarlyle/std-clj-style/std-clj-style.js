var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// node_modules/@chrisoakman/standard-clojure-style/dist/standard-clojure-style.js
var require_standard_clojure_style = __commonJS({
  "node_modules/@chrisoakman/standard-clojure-style/dist/standard-clojure-style.js"(exports, module) {
    (function(root, factory) {
      if (typeof define === "function" && define.amd) {
        define([], factory);
      } else if (typeof module === "object" && module.exports) {
        module.exports = factory();
      } else {
        root.standardClojureStyle = factory();
      }
    })(exports, function() {
      "use strict";
      function isString(s) {
        return typeof s === "string";
      }
      function isInteger(x) {
        return typeof x === "number" && isFinite(x) && Math.floor(x) === x;
      }
      function isPositiveInt(i) {
        return isInteger(i) && i >= 0;
      }
      function isFunction(f) {
        return typeof f === "function";
      }
      function isObject(o) {
        return typeof o === "object";
      }
      function isArray(x) {
        return Array.isArray(x);
      }
      function strLen(s) {
        return s.length;
      }
      function arraySize(a) {
        return a.length;
      }
      function arrayLast(a) {
        const s = arraySize(a);
        if (s === 0) {
          return null;
        } else {
          return a[dec(s)];
        }
      }
      function dropLast(arr) {
        return arr.splice(0, dec(arraySize(arr)));
      }
      function arrayPluck(arr, key) {
        const arr2 = [];
        const size = arraySize(arr);
        let idx = 0;
        while (idx < size) {
          const itm = arr[idx];
          arr2.push(itm[key]);
          idx = inc(idx);
        }
        return arr2;
      }
      function arrayReverse(arr) {
        return arr.reverse();
      }
      function strConcat(s1, s2) {
        return "" + s1 + s2;
      }
      function strConcat3(s1, s2, s3) {
        return "" + s1 + s2 + s3;
      }
      function inc(n) {
        return n + 1;
      }
      function dec(n) {
        return n - 1;
      }
      const runtimeHasObjectKeys = isFunction(Object.keys);
      function objectForEach(obj, aFn) {
        if (runtimeHasObjectKeys) {
          const keys = Object.keys(obj);
          const numKeys = arraySize(keys);
          let idx = 0;
          while (idx < numKeys) {
            const key = keys[idx];
            aFn(key, obj[key]);
            idx = inc(idx);
          }
        } else {
          for (const key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key)) {
              aFn(key, obj[key]);
            }
          }
        }
      }
      function deleteObjKey(obj, key) {
        delete obj[key];
        return obj;
      }
      function alwaysTrue() {
        return true;
      }
      function stackPeek(arr, idxFromBack) {
        const maxIdx = dec(arraySize(arr));
        if (idxFromBack > maxIdx) {
          return null;
        }
        return arr[maxIdx - idxFromBack];
      }
      function stackPop(s) {
        const itm = s.pop();
        return itm;
      }
      function stackPush(s, itm) {
        s.push(itm);
        return null;
      }
      function charAt(s, n) {
        return s.charAt(n);
      }
      function substr(s, startIdx, endIdx) {
        const len = strLen(s);
        if (startIdx < 0 || startIdx > len) {
          return "";
        }
        if (endIdx < 0) {
          endIdx = len;
        } else if (endIdx > len) {
          endIdx = len;
        }
        return s.substring(startIdx, endIdx);
      }
      function repeatString(text, n) {
        let result = "";
        let i = 0;
        while (i < n) {
          result = result + text;
          i = inc(i);
        }
        return result;
      }
      function strIncludes(s, needle) {
        return s.includes(needle);
      }
      function toUpperCase(s) {
        return s.toUpperCase();
      }
      function strJoin(arr, s) {
        return arr.join(s);
      }
      function rtrim(s) {
        return s.trimEnd();
      }
      function strTrim(s) {
        return s.trim();
      }
      function strStartsWith(s, startStr) {
        return s.startsWith(startStr);
      }
      function strEndsWith(s, endStr) {
        return s.endsWith(endStr);
      }
      function isStringWithChars(s) {
        return isString(s) && s !== "";
      }
      function strReplaceFirst(s, find, replace) {
        if (s === "") return "";
        if (find === "") return s;
        return s.replace(find, replace);
      }
      function crlfToLf(txt) {
        return txt.replace(/\r\n/g, "\n");
      }
      function strSplit(str, ch) {
        return str.split(ch);
      }
      let idCounter = 0;
      function createId() {
        idCounter = inc(idCounter);
        return idCounter;
      }
      function Node(opts) {
        return {
          children: opts.children,
          endIdx: opts.endIdx,
          id: createId(),
          name: opts.name,
          startIdx: opts.startIdx,
          text: opts.text
        };
      }
      function Named(opts) {
        return {
          parse: (txt, pos) => {
            const parser = getParser(opts.parser);
            const node = parser.parse(txt, pos);
            if (!node) {
              return null;
            } else if (node && !isString(node.name)) {
              node.name = opts.name;
              return node;
            } else {
              return Node({
                children: [node],
                endIdx: node.endIdx,
                name: opts.name,
                startIdx: node.startIdx
              });
            }
          }
        };
      }
      function AnyChar(opts) {
        return {
          name: opts.name,
          parse: (txt, pos) => {
            if (pos < strLen(txt)) {
              return Node({
                endIdx: inc(pos),
                name: opts.name,
                startIdx: pos,
                text: charAt(txt, pos)
              });
            } else {
              return null;
            }
          }
        };
      }
      function Char(opts) {
        return {
          isTerminal: true,
          char: opts.char,
          name: opts.name,
          parse: function(txt, pos) {
            if (pos < strLen(txt) && charAt(txt, pos) === opts.char) {
              return Node({
                endIdx: inc(pos),
                name: opts.name,
                startIdx: pos,
                text: opts.char
              });
            } else {
              return null;
            }
          }
        };
      }
      function NotChar(opts) {
        return {
          isTerminal: true,
          char: opts.char,
          name: opts.name,
          parse: function(txt, pos) {
            if (pos < strLen(txt)) {
              const charAtThisPos = charAt(txt, pos);
              if (charAtThisPos !== opts.char) {
                return Node({
                  endIdx: inc(pos),
                  name: opts.name,
                  startIdx: pos,
                  text: charAtThisPos
                });
              }
            }
            return null;
          }
        };
      }
      function String(opts) {
        return {
          name: opts.name,
          parse: (txt, pos) => {
            const len = strLen(opts.str);
            if (pos + len <= strLen(txt)) {
              const strToCompare = substr(txt, pos, pos + len);
              if (opts.str === strToCompare) {
                return Node({
                  endIdx: pos + len,
                  name: opts.name,
                  startIdx: pos,
                  text: opts.str
                });
              }
            }
            return null;
          }
        };
      }
      function Regex(opts) {
        return {
          name: opts.name,
          parse: (txt, pos) => {
            const innerTxt = substr(txt, pos, -1);
            const result = innerTxt.match(opts.regex);
            let matchedStr = null;
            if (result && isInteger(opts.groupIdx) && isString(result[inc(opts.groupIdx)])) {
              matchedStr = result[inc(opts.groupIdx)];
            } else if (result && isString(result[0])) {
              matchedStr = result[0];
            }
            if (isString(matchedStr)) {
              return Node({
                endIdx: pos + strLen(matchedStr),
                name: opts.name,
                startIdx: pos,
                text: matchedStr
              });
            }
            return null;
          }
        };
      }
      function Seq(opts) {
        return {
          isTerminal: false,
          name: opts.name,
          parse: (txt, pos) => {
            const children = [];
            let endIdx = pos;
            let j = 0;
            const numParsers = arraySize(opts.parsers);
            while (j < numParsers) {
              const parser = opts.parsers[j];
              const possibleNode = parser.parse(txt, endIdx);
              if (possibleNode) {
                appendChildren(children, possibleNode);
                endIdx = possibleNode.endIdx;
              } else {
                return null;
              }
              j = inc(j);
            }
            return Node({
              children,
              endIdx,
              name: opts.name,
              startIdx: pos
            });
          }
        };
      }
      function Choice(opts) {
        return {
          parse: (txt, pos) => {
            let i = 0;
            const numParsers = arraySize(opts.parsers);
            while (i < numParsers) {
              const parser = getParser(opts.parsers[i]);
              const possibleNode = parser.parse(txt, pos);
              if (possibleNode) return possibleNode;
              i = inc(i);
            }
            return null;
          }
        };
      }
      function Repeat(opts) {
        return {
          parse: (txt, pos) => {
            opts.parser = getParser(opts.parser);
            let minMatches = 0;
            if (isPositiveInt(opts.minMatches)) {
              minMatches = opts.minMatches;
            }
            const children = [];
            let endIdx = pos;
            let lookForTheNextNode = true;
            while (lookForTheNextNode) {
              const node = opts.parser.parse(txt, endIdx);
              if (node) {
                appendChildren(children, node);
                endIdx = node.endIdx;
              } else {
                lookForTheNextNode = false;
              }
            }
            let name2 = null;
            if (isString(opts.name) && endIdx > pos) name2 = opts.name;
            if (arraySize(children) >= minMatches) {
              return Node({
                children,
                endIdx,
                name: name2,
                startIdx: pos
              });
            }
            return null;
          }
        };
      }
      function Optional(parser) {
        return {
          parse: (txt, pos) => {
            const node = parser.parse(txt, pos);
            if (node && isString(node.text) && node.text !== "") {
              return node;
            } else {
              return Node({ startIdx: pos, endIdx: pos });
            }
          }
        };
      }
      function appendChildren(childrenArr, node) {
        if (isString(node.name) && node.name !== "") {
          childrenArr.push(node);
        } else if (isArray(node.children)) {
          let i = 0;
          const numChildren = arraySize(node.children);
          while (i < numChildren) {
            const child = node.children[i];
            if (child) appendChildren(childrenArr, child);
            i = inc(i);
          }
        }
      }
      function getParser(p) {
        if (isString(p) && parsers[p]) {
          return parsers[p];
        } else if (isObject(p) && isFunction(p.parse)) {
          return p;
        } else {
          throw new Error("getParser error: could not find parser: " + p);
        }
      }
      const parsers = {};
      parsers.string = Seq(
        {
          name: "string",
          parsers: [
            Regex({ regex: /^#?"/, name: ".open" }),
            Optional(Regex({ regex: /^([^"\\]+|\\.)+/, name: ".body" })),
            Optional(Char({ char: '"', name: ".close" }))
          ]
        }
      );
      const whitespaceCommons = " ,\\n\\r\\t\\f";
      const whitespaceUnicodes = "\\u000B\\u001C\\u001D\\u001E\\u001F\\u2028\\u2029\\u1680\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2008\\u2009\\u200a\\u205f\\u3000";
      const whitespaceChars = strConcat(whitespaceCommons, whitespaceUnicodes);
      const tokenHeadChars = "()\\[\\]{}\\\"@~^;`#\\'";
      const tokenTailChars = '()\\[\\]{}\\"@^;`';
      const tokenReStr = "[^" + tokenHeadChars + whitespaceChars + "][^" + tokenTailChars + whitespaceChars + "]*";
      const charReStr = '\\\\[()\\[\\]{}"@^;`, ]';
      parsers.token = Regex({ name: "token", regex: new RegExp("^(##)?(" + charReStr + "|" + tokenReStr + ")") });
      parsers._ws = Regex({ name: "whitespace", regex: new RegExp("^[" + whitespaceChars + "]+") });
      parsers.comment = Regex({ name: "comment", regex: /^;[^\n]*/ });
      parsers.discard = Seq({
        name: "discard",
        parsers: [
          String({ name: "marker", str: "#_" }),
          Repeat({ parser: "_gap" }),
          Named({ name: ".body", parser: "_form" })
        ]
      });
      parsers.braces = Seq({
        name: "braces",
        parsers: [
          // NOTE: difference from cs_parser.py here
          Choice({
            parsers: [
              Char({ name: ".open", char: "{" }),
              String({ name: ".open", str: "#{" }),
              String({ name: ".open", str: "#::{" }),
              Regex({ name: ".open", regex: /^#:{1,2}[a-zA-Z][a-zA-Z0-9.-_]*{/ })
            ]
          }),
          Repeat({
            name: ".body",
            parser: Choice({ parsers: ["_gap", "_form", NotChar({ name: "error", char: "}" })] })
          }),
          Optional(Char({ name: ".close", char: "}" }))
        ]
      });
      parsers.brackets = Seq({
        name: "brackets",
        parsers: [
          Char({ name: ".open", char: "[" }),
          Repeat({
            name: ".body",
            parser: Choice({ parsers: ["_gap", "_form", NotChar({ name: "error", char: "]" })] })
          }),
          Optional(Char({ name: ".close", char: "]" }))
        ]
      });
      parsers.parens = Seq({
        name: "parens",
        parsers: [
          Regex({ name: ".open", regex: /^(#\?@|#\?|#=|#)?\(/ }),
          Repeat({
            name: ".body",
            parser: Choice({ parsers: ["_gap", "_form", NotChar({ char: ")", name: "error" })] })
          }),
          Optional(Char({ name: ".close", char: ")" }))
        ]
      });
      parsers._gap = Choice({ parsers: ["_ws", "comment", "discard"] });
      parsers.meta = Seq({
        name: "meta",
        parsers: [
          Repeat({
            minMatches: 1,
            parser: Seq({
              parsers: [
                Regex({ name: ".marker", regex: /^#?\^/ }),
                Repeat({ parser: "_gap" }),
                Named({ name: ".meta", parser: "_form" }),
                Repeat({ parser: "_gap" })
              ]
            })
          }),
          Named({ name: ".body", parser: "_form" })
        ]
      });
      parsers.wrap = Seq({
        name: "wrap",
        parsers: [
          Regex({ name: ".marker", regex: /^(@|'|`|~@|~|#')/ }),
          Repeat({ parser: "_gap" }),
          Named({ name: ".body", parser: "_form" })
        ]
      });
      parsers.tagged = Seq({
        name: "tagged",
        parsers: [
          Char({ char: "#" }),
          Repeat({ parser: "_gap" }),
          Named({ name: ".tag", parser: "token" }),
          Repeat({ parser: "_gap" }),
          Named({ name: ".body", parser: "_form" })
        ]
      });
      parsers._form = Choice({ parsers: ["token", "string", "parens", "brackets", "braces", "wrap", "meta", "tagged"] });
      parsers.source = Repeat({
        name: "source",
        parser: Choice({ parsers: ["_gap", "_form", AnyChar({ name: "error" })] })
      });
      function nodeContainsText(node) {
        return node && isString(node.text) && node.text !== "";
      }
      function isNodeWithNonBlankText(node) {
        return nodeContainsText(node) && charAt(node.text, 0) !== " ";
      }
      function isNsNode(node) {
        return node.name === "token" && node.text === "ns";
      }
      function isRequireNode(node) {
        return node && isString(node.text) && (node.text === ":require" || node.text === "require");
      }
      function isRequireMacrosKeyword(node) {
        return node && isString(node.text) && node.text === ":require-macros";
      }
      function isReferClojureNode(node) {
        return node && isString(node.text) && (node.text === ":refer-clojure" || node.text === "refer-clojure");
      }
      function isExcludeKeyword(node) {
        return node && isString(node.text) && node.text === ":exclude";
      }
      function isOnlyKeyword(node) {
        return node && isString(node.text) && node.text === ":only";
      }
      function isRenameKeyword(node) {
        return node && isString(node.text) && node.text === ":rename";
      }
      function isAsKeyword(node) {
        return node && isString(node.text) && node.text === ":as";
      }
      function isAsAliasKeyword(node) {
        return node && isString(node.text) && node.text === ":as-alias";
      }
      function isReferKeyword(node) {
        return node && isString(node.text) && node.text === ":refer";
      }
      function isDefaultKeyword(node) {
        return node && isString(node.text) && node.text === ":default";
      }
      function isReferMacrosKeyword(node) {
        return node && isString(node.text) && node.text === ":refer-macros";
      }
      function isIncludeMacrosNode(node) {
        return node && isString(node.text) && node.text === ":include-macros";
      }
      function isBooleanNode(node) {
        return node && isString(node.text) && (node.text === "true" || node.text === "false");
      }
      function isAllNode(node) {
        return node && isString(node.text) && node.text === ":all";
      }
      function isKeywordNode(node) {
        return node && isString(node.text) && strStartsWith(node.text, ":");
      }
      function isImportNode(node) {
        return node && isString(node.text) && (node.text === ":import" || node.text === "import");
      }
      function isNewlineNode(n) {
        return n.name === "whitespace" && isString(n.text) && strIncludes(n.text, "\n");
      }
      function isWhitespaceNode(n) {
        return n.name === "whitespace" || isNewlineNode(n);
      }
      function isCommaNode(n) {
        return n.name === "whitespace" && strIncludes(n.text, ",");
      }
      const parenOpenersTbl = {
        "(": true,
        "[": true,
        "{": true,
        "#{": true,
        "#(": true,
        "#?(": true,
        "#?@(": true
      };
      function isParenOpener(n) {
        return n && n.name === ".open" && (parenOpenersTbl[n.text] || isNamespacedMapOpener(n));
      }
      function isParenCloser(n) {
        return n && n.name === ".close" && (n.text === ")" || n.text === "]" || n.text === "}");
      }
      function isTokenNode(n) {
        return n.name === "token";
      }
      function isTagNode(n) {
        return n.name === ".tag";
      }
      function isStringNode(n) {
        return n && n.name === "string" && isArray(n.children) && arraySize(n.children) === 3 && n.children[1].name === ".body";
      }
      function getTextFromStringNode(n) {
        return n.children[1].text;
      }
      function isCommentNode(n) {
        return n.name === "comment";
      }
      function isReaderCommentNode(n) {
        return n.name === "discard";
      }
      function isDiscardNode(n) {
        return n.name === "marker" && n.text === "#_";
      }
      function isStandardCljIgnoreKeyword(n) {
        return n.name === "token" && n.text === ":standard-clj/ignore";
      }
      function isStandardCljIgnoreFileKeyword(n) {
        return n.name === "token" && n.text === ":standard-clj/ignore-file";
      }
      function nodeContainsTextAndNotWhitespace(n) {
        return nodeContainsText(n) && !isWhitespaceNode(n);
      }
      function isOneSpaceOpener(opener) {
        return opener.text === "{" || opener.text === "[";
      }
      function isAnonFnOpener(opener) {
        return opener.text === "#(";
      }
      function isNamespacedMapOpener(opener) {
        return opener.name === ".open" && strStartsWith(opener.text, "#:") && strEndsWith(opener.text, "{");
      }
      function isReaderConditionalOpener(opener) {
        return opener.text === "#?(" || opener.text === "#?@(";
      }
      function isOpeningBraceNode(n) {
        return n.name === "braces" && isArray(n.children) && arraySize(n.children) === 3 && n.children[2].name === ".close" && n.children[2].text === "}";
      }
      function commentNeedsSpaceBefore(lineTxt, nodeTxt) {
        return strStartsWith(nodeTxt, ";") && lineTxt !== "" && !strEndsWith(lineTxt, " ") && !strEndsWith(lineTxt, "(") && !strEndsWith(lineTxt, "[") && !strEndsWith(lineTxt, "{");
      }
      function commentNeedsSpaceInside(commentTxt) {
        return !commentTxt.match(/^;+ /) && !commentTxt.match(/^;+$/);
      }
      function isGenClassNode(node) {
        return node && isString(node.text) && node.text === ":gen-class";
      }
      const genClassKeywordsTbl = {
        ":name": true,
        ":extends": true,
        ":implements": true,
        ":init": true,
        ":constructors": true,
        ":post-init": true,
        ":methods": true,
        ":main": true,
        ":factory": true,
        ":state": true,
        ":exposes": true,
        ":exposes-methods": true,
        ":prefix": true,
        ":impl-ns": true,
        ":load-impl-ns": true
      };
      function isGenClassKeyword(node) {
        return node && isString(node.text) && genClassKeywordsTbl[node.text];
      }
      const genClassKeys = ["name", "extends", "implements", "init", "constructors", "post-init", "methods", "main", "factory", "state", "exposes", "exposes-methods", "prefix", "impl-ns", "load-impl-ns"];
      function isGenClassNameKey(keyTxt) {
        return keyTxt === "name" || keyTxt === "extends" || keyTxt === "init" || keyTxt === "post-init" || keyTxt === "factory" || keyTxt === "state" || keyTxt === "impl-ns";
      }
      function isGenClassBooleanKey(keyTxt) {
        return keyTxt === "main" || keyTxt === "load-impl-ns";
      }
      function recurseAllChildren(node, f) {
        f(node);
        if (node.children) {
          const numChildren = arraySize(node.children);
          let i = 0;
          while (i < numChildren) {
            const childNode = node.children[i];
            recurseAllChildren(childNode, f);
            i = inc(i);
          }
        }
        return null;
      }
      function getTextFromRootNode(rootNode) {
        let s = "";
        recurseAllChildren(rootNode, (n) => {
          if (isStringWithChars(n.text)) {
            s = strConcat(s, n.text);
          }
        });
        return s;
      }
      function getLastChildNodeWithText(rootNode) {
        let lastNode = null;
        recurseAllChildren(rootNode, (n) => {
          if (isStringWithChars(n.text)) {
            lastNode = n;
          }
        });
        return lastNode;
      }
      function flattenTree(tree) {
        const nodes = [];
        const pushNodeToNodes = (node) => {
          nodes.push(node);
        };
        recurseAllChildren(tree, pushNodeToNodes);
        return nodes;
      }
      function findNextNodeWithText(allNodes, idx) {
        const maxIdx = arraySize(allNodes);
        while (idx < maxIdx) {
          const node = allNodes[idx];
          if (isString(node.text) && node.text !== "") {
            return node;
          }
          idx = inc(idx);
        }
        return null;
      }
      function findNextNonWhitespaceNode(allNodes, idx) {
        const maxIdx = arraySize(allNodes);
        while (idx < maxIdx) {
          const node = allNodes[idx];
          if (!isWhitespaceNode(node)) {
            return node;
          }
          idx = inc(idx);
        }
        return null;
      }
      function findPrevNodeWithText(allNodes, startIdx, startingNodeId) {
        let keepSearching = true;
        let idx = startIdx;
        let beforeStartingNode = false;
        while (keepSearching) {
          const node = allNodes[idx];
          if (!beforeStartingNode) {
            if (node.id === startingNodeId) {
              beforeStartingNode = true;
            }
          } else {
            if (nodeContainsText(node)) {
              return node;
            }
          }
          idx = dec(idx);
          if (idx === 0) {
            keepSearching = false;
          }
        }
        return null;
      }
      function findNextNodeWithPredicateAfterSpecificNode(allNodes, startIdx, predFn, specificNodeId) {
        const maxIdx = arraySize(allNodes);
        let keepSearching = true;
        let idx = startIdx;
        let afterSpecificNode = false;
        while (keepSearching) {
          const node = allNodes[idx];
          if (!afterSpecificNode) {
            if (node.id === specificNodeId) {
              afterSpecificNode = true;
            }
          } else {
            if (predFn(node)) {
              return node;
            }
          }
          idx = inc(idx);
          if (idx >= maxIdx) {
            keepSearching = false;
          }
        }
        return null;
      }
      function findPrevNodeWithPredicate(allNodes, startIdx, predFn) {
        let idx = startIdx;
        while (idx >= 0) {
          const node = allNodes[idx];
          if (predFn(node)) {
            return node;
          }
          idx = dec(idx);
        }
        return null;
      }
      function areForwardNodesAlreadySlurped(nodes, idx) {
        const nodesSize = arraySize(nodes);
        let result = true;
        let keepSearching = true;
        while (keepSearching) {
          const node = nodes[idx];
          if (!node) {
            keepSearching = false;
          } else if (isNewlineNode(node)) {
            keepSearching = false;
          } else if (!isString(node.text)) {
            keepSearching = true;
          } else if (node._wasSlurpedUp || isWhitespaceNode(node)) {
            keepSearching = true;
          } else {
            keepSearching = false;
            result = false;
          }
          idx = inc(idx);
          if (idx >= nodesSize) {
            keepSearching = false;
          }
        }
        return result;
      }
      function findForwardClosingParens(nodes, idx) {
        const closers = [];
        const nodesSize = arraySize(nodes);
        let keepSearching = true;
        while (keepSearching) {
          const node = nodes[idx];
          if (!node) {
            keepSearching = false;
          } else if (isWhitespaceNode(node) || isParenCloser(node) || isCommentNode(node)) {
            closers.push(node);
            keepSearching = true;
          } else {
            keepSearching = false;
          }
          idx = inc(idx);
          if (idx >= nodesSize) {
            keepSearching = false;
          }
        }
        return closers;
      }
      function numSpacesAfterNewline(newlineNode) {
        const x = strSplit(newlineNode.text, "\n");
        const lastX = arrayLast(x);
        return strLen(lastX);
      }
      function recordOriginalColIndexes(nodes, idx) {
        let initialSpaces = 0;
        if (isNewlineNode(nodes[idx])) {
          initialSpaces = numSpacesAfterNewline(nodes[idx]);
          idx = inc(idx);
        }
        let colIdx = initialSpaces;
        const numNodes = arraySize(nodes);
        let keepSearching = true;
        while (keepSearching) {
          const node = nodes[idx];
          if (!node) {
            keepSearching = false;
          } else if (isNewlineNode(node)) {
            keepSearching = false;
          } else {
            const nodeTxt = node.text;
            if (isString(nodeTxt) && nodeTxt !== "") {
              const nodeTxtLength = strLen(nodeTxt);
              node._origColIdx = colIdx;
              colIdx = colIdx + nodeTxtLength;
            }
          }
          idx = inc(idx);
          if (idx > numNodes) {
            keepSearching = false;
          }
        }
        return nodes;
      }
      function removeLeadingWhitespace(txt) {
        return rtrim(strReplaceFirst(txt, /^[, ]*\n+ */, ""));
      }
      function txtHasCommasAfterNewline(s) {
        return /\n.*,.*$/.test(s);
      }
      function hasCommasAfterNewline(node) {
        return isWhitespaceNode(node) && txtHasCommasAfterNewline(node.text);
      }
      function isNextLineACommentLine(nodes, idx) {
        const n1 = nodes[idx];
        const n2 = nodes[inc(idx)];
        if (n1 && n2) {
          return isCommentNode(n1) && isNewlineNode(n2);
        } else if (n1 && !n2) {
          return isCommentNode(n1);
        } else {
          return false;
        }
      }
      function numSpacesForIndentation(wrappingOpener) {
        if (!wrappingOpener) {
          return 0;
        } else {
          const nextNodeAfterOpener = wrappingOpener._nextWithText;
          const openerTextLength = strLen(wrappingOpener.text);
          const openerColIdx = wrappingOpener._printedColIdx;
          const directlyUnderneathOpener = openerColIdx + openerTextLength;
          if (isReaderConditionalOpener(wrappingOpener)) {
            return directlyUnderneathOpener;
          } else if (nextNodeAfterOpener && isParenOpener(nextNodeAfterOpener)) {
            return inc(openerColIdx);
          } else if (isOneSpaceOpener(wrappingOpener)) {
            return inc(openerColIdx);
          } else if (isAnonFnOpener(wrappingOpener)) {
            return openerColIdx + 3;
          } else if (isNamespacedMapOpener(wrappingOpener)) {
            return openerColIdx + strLen(wrappingOpener.text);
          } else {
            return inc(inc(openerColIdx));
          }
        }
      }
      function compareSymbolsThenPlatform(itmA, itmB) {
        if (itmA.symbol > itmB.symbol) return 1;
        else if (itmA.symbol < itmB.symbol) return -1;
        else if (itmA.symbol === itmB.symbol) {
          if (itmA.platform > itmB.platform) return 1;
          else if (itmA.platform < itmB.platform) return -1;
        }
        return 0;
      }
      function compareFromSymbol(itmA, itmB) {
        if (itmA.fromSymbol > itmB.fromSymbol) return 1;
        else if (itmA.fromSymbol < itmB.fromSymbol) return -1;
        else return 0;
      }
      function compareImports(importA, importB) {
        if (importA.package > importB.package) return 1;
        else if (importA.package < importB.package) return -1;
        else return 0;
      }
      function looksLikeAJavaClassname(s) {
        const firstChar = charAt(s, 0);
        return toUpperCase(firstChar) === firstChar;
      }
      function parseJavaPackageWithClass(s) {
        const chunks = strSplit(s, ".");
        const lastItm = arrayLast(chunks);
        if (looksLikeAJavaClassname(lastItm)) {
          const packageChunks = dropLast(chunks);
          const packageName = strJoin(packageChunks, ".");
          return {
            package: packageName,
            className: lastItm
          };
        } else {
          return {
            package: s,
            className: null
          };
        }
      }
      function findNextTokenInsideRequireForm(nodes, idx) {
        let result = null;
        const numNodes = arraySize(nodes);
        let keepSearching = true;
        while (keepSearching) {
          const node = nodes[idx];
          if (isParenCloser(node)) {
            keepSearching = false;
            result = null;
          } else if (isTokenNode(node) && node.text !== "") {
            keepSearching = false;
            result = node;
          }
          idx = inc(idx);
          if (idx >= numNodes) {
            keepSearching = false;
          }
        }
        return result;
      }
      function sortNsResult(result, prefixListComments) {
        if (result.referClojure && isArray(result.referClojure.exclude)) {
          result.referClojure.exclude.sort(compareSymbolsThenPlatform);
        }
        if (result.referClojure && isArray(result.referClojure.only)) {
          result.referClojure.only.sort(compareSymbolsThenPlatform);
        }
        if (result.referClojure && isArray(result.referClojure.rename)) {
          result.referClojure.rename.sort(compareFromSymbol);
        }
        if (isArray(result.requireMacros)) {
          result.requireMacros.sort(compareSymbolsThenPlatform);
          let rmIdx = 0;
          const numRequireMacrosResults = arraySize(result.requireMacros);
          while (rmIdx < numRequireMacrosResults) {
            if (isArray(result.requireMacros[rmIdx].refer)) {
              result.requireMacros[rmIdx].refer.sort(compareSymbolsThenPlatform);
            }
            rmIdx = inc(rmIdx);
          }
        }
        if (isArray(result.requires)) {
          result.requires.sort(compareSymbolsThenPlatform);
          const numRequires = arraySize(result.requires);
          let requiresIdx = 0;
          while (requiresIdx < numRequires) {
            const req = result.requires[requiresIdx];
            if (req.prefixListId) {
              if (prefixListComments[req.prefixListId]) {
                if (prefixListComments[req.prefixListId].commentsAbove) {
                  req.commentsAbove = prefixListComments[req.prefixListId].commentsAbove;
                }
                if (prefixListComments[req.prefixListId].commentAfter) {
                  req.commentAfter = prefixListComments[req.prefixListId].commentAfter;
                }
                deleteObjKey(prefixListComments, req.prefixListId);
              }
              deleteObjKey(req, "prefixListId");
            }
            if (isArray(result.requires[requiresIdx].refer)) {
              result.requires[requiresIdx].refer.sort(compareSymbolsThenPlatform);
            }
            if (isArray(result.requires[requiresIdx].exclude)) {
              result.requires[requiresIdx].exclude.sort(compareSymbolsThenPlatform);
            }
            if (isArray(result.requires[requiresIdx].rename)) {
              result.requires[requiresIdx].rename.sort(compareFromSymbol);
            }
            requiresIdx = inc(requiresIdx);
          }
        }
        if (result.importsObj) {
          result.imports = [];
          objectForEach(result.importsObj, function(packageName, obj) {
            const sortedClasses = obj.classes.sort();
            const importObj = {
              package: packageName,
              classes: sortedClasses
            };
            if (obj.commentsAbove) {
              importObj.commentsAbove = obj.commentsAbove;
            }
            if (obj.commentAfter) {
              importObj.commentAfter = obj.commentAfter;
            }
            if (obj.platform) {
              importObj.platform = obj.platform;
            }
            stackPush(result.imports, importObj);
          });
          deleteObjKey(result, "importsObj");
          result.imports.sort(compareImports);
        }
        if (isArray(result.nsMetadata)) {
          const numMetadataItms = arraySize(result.nsMetadata);
          if (numMetadataItms > 1) {
            const metadataObj = {};
            const metadataKeys = [];
            let idx = 0;
            while (idx < numMetadataItms) {
              const metadataItm = result.nsMetadata[idx];
              metadataObj[metadataItm.key] = metadataItm.value;
              stackPush(metadataKeys, metadataItm.key);
              idx = inc(idx);
            }
            const newNsMetadata = [];
            let reverseIdx = dec(arraySize(metadataKeys));
            while (reverseIdx >= 0) {
              const key2 = metadataKeys[reverseIdx];
              if (metadataObj[key2]) {
                const metadataItm2 = {};
                metadataItm2.key = key2;
                metadataItm2.value = metadataObj[key2];
                deleteObjKey(metadataObj, key2);
                stackPush(newNsMetadata, metadataItm2);
              }
              reverseIdx = dec(reverseIdx);
            }
            result.nsMetadata = arrayReverse(newNsMetadata);
          }
        }
        return result;
      }
      function lookForIgnoreFile(nodesArr) {
        let keepSearching = true;
        const numNodes = arraySize(nodesArr);
        let idx = 0;
        while (keepSearching) {
          const node = nodesArr[idx];
          if (isDiscardNode(node)) {
            const next1 = findNextNodeWithPredicateAfterSpecificNode(nodesArr, idx, nodeContainsTextAndNotWhitespace, node.id);
            if (isStandardCljIgnoreFileKeyword(next1)) {
              return true;
            } else if (next1.text === "{") {
              const next2 = findNextNodeWithPredicateAfterSpecificNode(nodesArr, idx, nodeContainsTextAndNotWhitespace, next1.id);
              if (isStandardCljIgnoreFileKeyword(next2)) {
                const next3 = findNextNodeWithPredicateAfterSpecificNode(nodesArr, idx, nodeContainsTextAndNotWhitespace, next2.id);
                if (next3.name === "token" && next3.text === "true") {
                  return true;
                }
              }
            }
          } else if (isNsNode(node)) {
            return false;
          }
          idx = inc(idx);
          if (idx >= numNodes) {
            keepSearching = false;
          }
        }
        return false;
      }
      function parseNs(nodesArr) {
        let idx = 0;
        const numNodes = arraySize(nodesArr);
        const result = {
          nsSymbol: null
        };
        let continueParsingNsForm = true;
        let nsFormEndsLineIdx = -1;
        let parenNestingDepth = 0;
        let lineNo = 0;
        const parenStack = [];
        let insideNsForm = false;
        let insideReferClojureForm = false;
        let referClojureParenNestingDepth = -1;
        let insideRequireForm = false;
        let requireFormParenNestingDepth = -1;
        let requireFormLineNo = -1;
        let insideImportForm = false;
        let importFormLineNo = -1;
        let nextTextNodeIsNsSymbol = false;
        let insideImportPackageList = false;
        let collectReferClojureExcludeSymbols = false;
        let collectReferClojureOnlySymbols = false;
        let collectReferClojureRenameSymbols = false;
        let collectRequireExcludeSymbols = false;
        let requireExcludeSymbolParenDepth = -1;
        let renamesTmp = [];
        let importPackageListFirstToken = null;
        let nsNodeIdx = -1;
        let nsSymbolIdx = -1;
        let beyondNsMetadata = false;
        let insideNsMetadataHashMap = false;
        let insideNsMetadataShorthand = false;
        let nextTokenNodeIsMetadataTrueKey = false;
        let nextTextNodeIsMetadataKey = false;
        let metadataValueNodeId = -1;
        let tmpMetadataKey = "";
        let referClojureNodeIdx = -1;
        let requireNodeIdx = -1;
        let referIdx = -1;
        let referParenNestingDepth = -1;
        let importNodeIdx = -1;
        let importNodeParenNestingDepth = -1;
        let activeRequireIdx = -1;
        let requireSymbolIdx = -1;
        let nextTokenIsAsSymbol = false;
        let singleLineComments = [];
        let activeImportPackageName = null;
        let prevNodeIsNewline = false;
        let lineOfLastCommentRecording = -1;
        let insidePrefixList = false;
        let prefixListPrefix = null;
        let prefixListLineNo = -1;
        const prefixListComments = {};
        let currentPrefixListId = null;
        let insideReaderConditional = false;
        let currentReaderConditionalPlatform = null;
        let readerConditionalParenNestingDepth = -1;
        let insideRequireList = false;
        let requireListParenNestingDepth = -1;
        let referMacrosIdx = -1;
        let referMacrosParenNestingDepth = -1;
        let insideIncludeMacros = false;
        let activeRequireMacrosIdx = -1;
        let insideRequireMacrosForm = false;
        let requireMacrosNodeIdx = -1;
        let requireMacrosLineNo = -1;
        let requireMacrosParenNestingDepth = -1;
        let requireMacrosReferNodeIdx = -1;
        let requireMacrosAsNodeIdx = -1;
        let requireMacrosRenameIdx = -1;
        let genClassNodeIdx = -1;
        let insideGenClass = false;
        let genClassLineNo = -1;
        let genClassToggle = 0;
        let genClassKeyStr = null;
        let genClassValueLineNo = -1;
        let insideReaderComment = false;
        let idOfLastNodeInsideReaderComment = -1;
        let requireRenameIdx = -1;
        let skipNodesUntilWeReachThisId = -1;
        let sectionToAttachEolCommentsTo = null;
        let nextTokenIsRequireDefaultSymbol = false;
        while (continueParsingNsForm) {
          const node = nodesArr[idx];
          const currentNodeIsNewline = isNewlineNode(node);
          if (parenNestingDepth === 1 && isNsNode(node)) {
            insideNsForm = true;
            nextTextNodeIsNsSymbol = true;
            nsNodeIdx = idx;
          } else if (insideNsForm && isReferClojureNode(node)) {
            insideReferClojureForm = true;
            referClojureParenNestingDepth = parenNestingDepth;
            sectionToAttachEolCommentsTo = "refer-clojure";
            referClojureNodeIdx = idx;
            beyondNsMetadata = true;
          } else if (insideNsForm && isRequireNode(node)) {
            insideRequireForm = true;
            requireFormParenNestingDepth = parenNestingDepth;
            requireFormLineNo = lineNo;
            requireNodeIdx = idx;
            beyondNsMetadata = true;
            sectionToAttachEolCommentsTo = "require";
          } else if (insideNsForm && isImportNode(node)) {
            insideImportForm = true;
            importFormLineNo = lineNo;
            importNodeIdx = idx;
            importNodeParenNestingDepth = parenNestingDepth;
            beyondNsMetadata = true;
            sectionToAttachEolCommentsTo = "import";
          } else if (insideNsForm && isRequireMacrosKeyword(node)) {
            insideRequireMacrosForm = true;
            requireMacrosNodeIdx = idx;
            requireMacrosLineNo = lineNo;
            requireMacrosParenNestingDepth = parenNestingDepth;
            beyondNsMetadata = true;
            sectionToAttachEolCommentsTo = "require-macros";
          } else if (insideNsForm && isGenClassNode(node)) {
            insideGenClass = true;
            genClassNodeIdx = idx;
            beyondNsMetadata = true;
            sectionToAttachEolCommentsTo = "gen-class";
          }
          if (isParenOpener(node)) {
            parenNestingDepth = inc(parenNestingDepth);
            stackPush(parenStack, node);
            if (insideNsForm && isReaderConditionalOpener(node)) {
              insideReaderConditional = true;
              currentReaderConditionalPlatform = null;
              readerConditionalParenNestingDepth = parenNestingDepth;
            } else if (insideRequireForm) {
              insideRequireList = true;
              requireListParenNestingDepth = parenNestingDepth;
            } else if (insideImportForm && parenNestingDepth > importNodeParenNestingDepth) {
              insideImportPackageList = true;
            }
          } else if (isParenCloser(node)) {
            parenNestingDepth = dec(parenNestingDepth);
            stackPop(parenStack);
            if (insideImportPackageList) {
              insideImportPackageList = false;
              importPackageListFirstToken = null;
            } else if (insideRequireForm && parenNestingDepth < requireFormParenNestingDepth) {
              insideRequireForm = false;
            } else if (insideRequireList && parenNestingDepth < requireListParenNestingDepth) {
              insideRequireList = false;
              requireListParenNestingDepth = -1;
              requireRenameIdx = -1;
            } else if (insideReferClojureForm && parenNestingDepth < referClojureParenNestingDepth) {
              insideReferClojureForm = false;
              referClojureNodeIdx = -1;
            } else if (insideNsForm && parenNestingDepth === 0) {
              insideNsForm = false;
              nsFormEndsLineIdx = lineNo;
            }
            if (insideReferClojureForm && parenNestingDepth <= referClojureParenNestingDepth) {
              collectReferClojureExcludeSymbols = false;
              collectReferClojureOnlySymbols = false;
              collectReferClojureRenameSymbols = false;
            }
            if (referIdx > 0 && parenNestingDepth < referParenNestingDepth) {
              referIdx = -1;
              referParenNestingDepth = -1;
              nextTokenIsRequireDefaultSymbol = false;
            }
            if (insideRequireForm && requireSymbolIdx > 0) {
              requireSymbolIdx = -1;
            }
            if (insideRequireForm && insidePrefixList) {
              insidePrefixList = false;
              prefixListPrefix = null;
            }
            if (insideReaderConditional && parenNestingDepth === dec(readerConditionalParenNestingDepth)) {
              insideReaderConditional = false;
              currentReaderConditionalPlatform = null;
              readerConditionalParenNestingDepth = -1;
            }
            if (idx > referMacrosIdx && parenNestingDepth <= referMacrosParenNestingDepth) {
              referMacrosIdx = -1;
              referMacrosParenNestingDepth = -1;
            }
            if (insideImportForm && parenNestingDepth < importNodeParenNestingDepth) {
              insideImportForm = false;
              importNodeIdx = -1;
              importNodeParenNestingDepth = -1;
            }
            if (insideRequireMacrosForm && parenNestingDepth < requireMacrosParenNestingDepth) {
              insideRequireMacrosForm = false;
              requireMacrosParenNestingDepth = -1;
              requireMacrosNodeIdx = -1;
              requireMacrosAsNodeIdx = -1;
            }
            if (collectRequireExcludeSymbols && parenNestingDepth < requireExcludeSymbolParenDepth) {
              collectRequireExcludeSymbols = false;
              requireExcludeSymbolParenDepth = -1;
            }
            requireMacrosReferNodeIdx = -1;
            requireMacrosRenameIdx = -1;
          }
          const isTokenNode2 = isTokenNode(node);
          const isTextNode = nodeContainsText(node);
          const isCommentNode2 = isCommentNode(node);
          const isReaderCommentNode2 = isReaderCommentNode(node);
          if (isReaderCommentNode2) {
            insideReaderComment = true;
            const lastNodeOfReaderComment = getLastChildNodeWithText(node);
            idOfLastNodeInsideReaderComment = lastNodeOfReaderComment.id;
          }
          if (skipNodesUntilWeReachThisId > 0) {
            if (node.id === skipNodesUntilWeReachThisId) {
              skipNodesUntilWeReachThisId = -1;
            }
          } else if (insideNsMetadataShorthand) {
            if (node.name === ".marker" && node.text === "^") {
              nextTokenNodeIsMetadataTrueKey = true;
            } else if (nextTokenNodeIsMetadataTrueKey && isTokenNode2) {
              if (!result.nsMetadata) {
                result.nsMetadata = [];
              }
              const metadataObj = {};
              metadataObj.key = node.text;
              metadataObj.value = "true";
              stackPush(result.nsMetadata, metadataObj);
              nextTokenNodeIsMetadataTrueKey = false;
              insideNsMetadataShorthand = false;
            }
          } else if (insideNsMetadataHashMap) {
            if (nextTextNodeIsMetadataKey && node.name === ".close" && node.text === "}") {
              insideNsMetadataHashMap = false;
            } else if (!nextTextNodeIsMetadataKey && node.name === ".open" && node.text === "{") {
              nextTextNodeIsMetadataKey = true;
            } else if (nextTextNodeIsMetadataKey && isTokenNode2) {
              if (!result.nsMetadata) {
                result.nsMetadata = [];
              }
              tmpMetadataKey = node.text;
              nextTextNodeIsMetadataKey = false;
              const nextNonWhitespaceNode = findNextNonWhitespaceNode(nodesArr, inc(idx));
              metadataValueNodeId = nextNonWhitespaceNode.id;
            } else if (node.id === metadataValueNodeId) {
              const metadataObj = {};
              metadataObj.key = tmpMetadataKey;
              metadataObj.value = getTextFromRootNode(node);
              stackPush(result.nsMetadata, metadataObj);
              tmpMetadataKey = "";
              nextTextNodeIsMetadataKey = true;
              metadataValueNodeId = -1;
              if (isArray(node.children)) {
                const lastChildNode = arrayLast(node.children);
                skipNodesUntilWeReachThisId = lastChildNode.id;
              }
            }
          } else if (!insideNsMetadataHashMap && !insideNsMetadataShorthand && insideNsForm && nsSymbolIdx < 0 && node.name === "meta") {
            const markerNode = findNextNodeWithText(nodesArr, inc(idx));
            if (markerNode.text === "^") {
              const nodeAfterMarker = findNextNodeWithText(nodesArr, inc(inc(idx)));
              if (nodeAfterMarker && nodeAfterMarker.text === "{") {
                insideNsMetadataHashMap = true;
              } else if (nodeAfterMarker && isTokenNode(nodeAfterMarker)) {
                insideNsMetadataShorthand = true;
              }
            }
          } else if (insideNsForm && idx > nsNodeIdx && parenNestingDepth >= 1 && !beyondNsMetadata && !insideReaderComment && !insideNsMetadataShorthand && !insideNsMetadataHashMap && node.name === ".open" && node.text === "{") {
            insideNsMetadataHashMap = true;
            nextTextNodeIsMetadataKey = true;
          } else if (idx > nsNodeIdx && nextTextNodeIsNsSymbol && isTokenNode2 && isTextNode) {
            result.nsSymbol = node.text;
            nsSymbolIdx = idx;
            nextTextNodeIsNsSymbol = false;
          } else if (insideReaderConditional && parenNestingDepth === readerConditionalParenNestingDepth && isKeywordNode(node)) {
            currentReaderConditionalPlatform = node.text;
          } else if (insideNsForm && idx > nsNodeIdx && prevNodeIsNewline && isCommentNode2) {
            stackPush(singleLineComments, node.text);
          } else if (insideNsForm && idx > nsNodeIdx && prevNodeIsNewline && isReaderCommentNode2) {
            stackPush(singleLineComments, getTextFromRootNode(node));
          } else if (idx > nsNodeIdx && !prevNodeIsNewline && (isCommentNode2 || isReaderCommentNode2)) {
            let commentAtEndOfLine = null;
            if (isCommentNode2) {
              commentAtEndOfLine = node.text;
            } else {
              commentAtEndOfLine = getTextFromRootNode(node);
            }
            if (prefixListLineNo === lineNo) {
              if (!prefixListComments[currentPrefixListId]) {
                prefixListComments[currentPrefixListId] = {};
              }
              prefixListComments[currentPrefixListId].commentAfter = commentAtEndOfLine;
              lineOfLastCommentRecording = lineNo;
            } else if (requireFormLineNo === lineNo && activeRequireIdx < 0) {
              result.requireCommentAfter = commentAtEndOfLine;
              lineOfLastCommentRecording = lineNo;
            } else if (requireFormLineNo === lineNo && activeRequireIdx >= 0) {
              result.requires[activeRequireIdx].commentAfter = commentAtEndOfLine;
              lineOfLastCommentRecording = lineNo;
            } else if (sectionToAttachEolCommentsTo === "refer-clojure" && result.referClojure) {
              result.referClojureCommentAfter = commentAtEndOfLine;
              lineOfLastCommentRecording = lineNo;
            } else if (importFormLineNo === lineNo && !result.importsObj) {
              result.importCommentAfter = commentAtEndOfLine;
              lineOfLastCommentRecording = lineNo;
            } else if (importFormLineNo === lineNo) {
              result.importsObj[activeImportPackageName].commentAfter = commentAtEndOfLine;
              lineOfLastCommentRecording = lineNo;
            } else if (requireMacrosLineNo === lineNo) {
              result.requireMacros[activeRequireMacrosIdx].commentAfter = commentAtEndOfLine;
              lineOfLastCommentRecording = lineNo;
            } else if (genClassLineNo === lineNo) {
              result.genClass.commentAfter = commentAtEndOfLine;
              lineOfLastCommentRecording = lineNo;
            } else if (genClassValueLineNo === lineNo) {
              result.genClass[genClassKeyStr].commentAfter = commentAtEndOfLine;
              lineOfLastCommentRecording = lineNo;
            }
            if (!insideNsForm && lineNo === lineOfLastCommentRecording) {
              result.commentOutsideNsForm = commentAtEndOfLine;
            }
          } else if (insideReaderComment) {
            if (node.id === idOfLastNodeInsideReaderComment) {
              insideReaderComment = false;
              idOfLastNodeInsideReaderComment = -1;
            }
          } else if (insideRequireForm && idx === requireNodeIdx && arraySize(singleLineComments) > 0) {
            result.requireCommentsAbove = singleLineComments;
            singleLineComments = [];
          } else if (insideImportForm && idx === importNodeIdx && arraySize(singleLineComments) > 0) {
            result.importCommentsAbove = singleLineComments;
            singleLineComments = [];
          } else if (insideReferClojureForm && idx === referClojureNodeIdx && arraySize(singleLineComments) > 0) {
            result.referClojureCommentsAbove = singleLineComments;
            singleLineComments = [];
          } else if (insideNsForm && idx > nsNodeIdx && parenNestingDepth === 1 && !beyondNsMetadata && !insideNsMetadataShorthand && !insideNsMetadataHashMap && isStringNode(node)) {
            result.docstring = getTextFromStringNode(node);
          } else if (insideReferClojureForm && idx > referClojureNodeIdx && isExcludeKeyword(node)) {
            if (!result.referClojure) {
              result.referClojure = {};
            }
            if (!isArray(result.referClojure.exclude)) {
              result.referClojure.exclude = [];
            }
            collectReferClojureExcludeSymbols = true;
          } else if (idx > inc(referClojureNodeIdx) && collectReferClojureExcludeSymbols && parenNestingDepth >= 3 && isTokenNode2 && isTextNode && result.referClojure && isArray(result.referClojure.exclude)) {
            const symbolObj = {};
            symbolObj.symbol = node.text;
            if (insideReaderConditional && currentReaderConditionalPlatform) {
              symbolObj.platform = currentReaderConditionalPlatform;
            }
            stackPush(result.referClojure.exclude, symbolObj);
          } else if (insideReferClojureForm && idx > referClojureNodeIdx && isOnlyKeyword(node)) {
            if (!result.referClojure) {
              result.referClojure = {};
            }
            result.referClojure.only = [];
            collectReferClojureOnlySymbols = true;
          } else if (idx > inc(referClojureNodeIdx) && collectReferClojureOnlySymbols && parenNestingDepth >= 3 && isTokenNode2 && isTextNode && result.referClojure && isArray(result.referClojure.only)) {
            const symbolObj = {
              symbol: node.text
            };
            if (insideReaderConditional && currentReaderConditionalPlatform) {
              symbolObj.platform = currentReaderConditionalPlatform;
            }
            stackPush(result.referClojure.only, symbolObj);
          } else if (insideReferClojureForm && idx > referClojureNodeIdx && isRenameKeyword(node)) {
            if (!result.referClojure) {
              result.referClojure = {};
            }
            result.referClojure.rename = [];
            collectReferClojureRenameSymbols = true;
          } else if (idx > inc(referClojureNodeIdx) && collectReferClojureRenameSymbols && parenNestingDepth >= 3 && isTokenNode2 && isTextNode && result.referClojure && isArray(result.referClojure.rename)) {
            stackPush(renamesTmp, node.text);
            if (arraySize(renamesTmp) === 2) {
              const itm = {};
              itm.fromSymbol = renamesTmp[0];
              itm.toSymbol = renamesTmp[1];
              if (insideReaderConditional && currentReaderConditionalPlatform) {
                itm.platform = currentReaderConditionalPlatform;
              }
              stackPush(result.referClojure.rename, itm);
              renamesTmp = [];
            }
          } else if (idx > requireNodeIdx && insideRequireForm && isTokenNode2 && isAsKeyword(node)) {
            nextTokenIsAsSymbol = true;
          } else if (idx > requireNodeIdx && insideRequireForm && nextTokenIsAsSymbol && isTokenNode2 && isTextNode) {
            nextTokenIsAsSymbol = false;
            result.requires[activeRequireIdx].as = node.text;
          } else if (insideRequireMacrosForm && requireMacrosReferNodeIdx !== -1 && idx > requireMacrosReferNodeIdx && isTokenNode2 && isTextNode) {
            if (!isArray(result.requireMacros[activeRequireMacrosIdx].refer)) {
              result.requireMacros[activeRequireMacrosIdx].refer = [];
            }
            const referObj = {};
            referObj.symbol = node.text;
            if (insideReaderConditional && currentReaderConditionalPlatform) {
              referObj.platform = currentReaderConditionalPlatform;
            }
            stackPush(result.requireMacros[activeRequireMacrosIdx].refer, referObj);
          } else if (insideRequireMacrosForm && requireMacrosAsNodeIdx !== -1 && idx > requireMacrosAsNodeIdx && isTokenNode2 && isTextNode) {
            result.requireMacros[activeRequireMacrosIdx].as = node.text;
            requireMacrosAsNodeIdx = -1;
          } else if (insideRequireMacrosForm && requireMacrosRenameIdx !== -1 && idx > requireMacrosRenameIdx && isTokenNode2 && isTextNode) {
            if (!isArray(result.requireMacros[activeRequireMacrosIdx].rename)) {
              result.requireMacros[activeRequireMacrosIdx].rename = [];
            }
            stackPush(renamesTmp, node.text);
            if (arraySize(renamesTmp) === 2) {
              const itm = {};
              itm.fromSymbol = renamesTmp[0];
              itm.toSymbol = renamesTmp[1];
              if (insideReaderConditional && currentReaderConditionalPlatform) {
                itm.platform = currentReaderConditionalPlatform;
              }
              stackPush(result.requireMacros[activeRequireMacrosIdx].rename, itm);
              renamesTmp = [];
            }
          } else if (insideRequireMacrosForm && idx > requireMacrosNodeIdx && isReferKeyword(node)) {
            requireMacrosReferNodeIdx = idx;
          } else if (insideRequireMacrosForm && idx > requireMacrosNodeIdx && isAsKeyword(node)) {
            requireMacrosAsNodeIdx = idx;
          } else if (insideRequireMacrosForm && idx > requireMacrosNodeIdx && isRenameKeyword(node)) {
            requireMacrosRenameIdx = idx;
            renamesTmp = [];
          } else if (insideRequireMacrosForm && idx > requireMacrosNodeIdx && isTokenNode2 && isTextNode) {
            if (!result.requireMacros) {
              result.requireMacros = [];
              if (arraySize(singleLineComments) > 0) {
                result.requireMacrosCommentsAbove = singleLineComments;
                singleLineComments = [];
              }
            }
            const reqObj = {
              symbol: node.text
            };
            if (arraySize(singleLineComments) > 0) {
              reqObj.commentsAbove = singleLineComments;
              singleLineComments = [];
            }
            if (insideReaderConditional && currentReaderConditionalPlatform) {
              reqObj.platform = currentReaderConditionalPlatform;
            }
            stackPush(result.requireMacros, reqObj);
            activeRequireMacrosIdx = inc(activeRequireMacrosIdx);
            requireMacrosLineNo = lineNo;
          } else if (idx > requireNodeIdx && insideRequireForm && isTokenNode2 && isIncludeMacrosNode(node)) {
            insideIncludeMacros = true;
          } else if (insideIncludeMacros && isTokenNode2 && isBooleanNode(node)) {
            if (node.text === "true") {
              result.requires[activeRequireIdx].includeMacros = true;
            } else {
              result.requires[activeRequireIdx].includeMacros = false;
            }
            insideIncludeMacros = false;
          } else if (idx > requireNodeIdx && insideRequireForm && isTokenNode2 && isReferMacrosKeyword(node)) {
            referMacrosIdx = idx;
            referMacrosParenNestingDepth = parenNestingDepth;
          } else if (idx > referMacrosIdx && insideRequireForm && parenNestingDepth === inc(referMacrosParenNestingDepth) && isTokenNode2 && isTextNode) {
            if (!isArray(result.requires[activeRequireIdx].referMacros)) {
              result.requires[activeRequireIdx].referMacros = [];
            }
            stackPush(result.requires[activeRequireIdx].referMacros, node.text);
          } else if (idx > requireNodeIdx && insideRequireForm && isTokenNode2 && isReferKeyword(node)) {
            referIdx = idx;
            referParenNestingDepth = parenNestingDepth;
          } else if (idx > requireNodeIdx && insideRequireForm && isTokenNode2 && isDefaultKeyword(node)) {
            nextTokenIsRequireDefaultSymbol = true;
          } else if (idx > requireNodeIdx && insideRequireForm && isTokenNode2 && collectRequireExcludeSymbols && parenNestingDepth > requireExcludeSymbolParenDepth) {
            const symbolObj = {
              symbol: node.text
            };
            stackPush(result.requires[activeRequireIdx].exclude, symbolObj);
          } else if (idx > requireNodeIdx && insideRequireForm && isTokenNode2 && isExcludeKeyword(node)) {
            result.requires[activeRequireIdx].exclude = [];
            collectRequireExcludeSymbols = true;
            requireExcludeSymbolParenDepth = parenNestingDepth;
          } else if (idx > requireNodeIdx && insideRequireForm && isTokenNode2 && isAsAliasKeyword(node)) {
            const nextSymbol = findNextTokenInsideRequireForm(nodesArr, inc(idx));
            result.requires[activeRequireIdx].asAlias = nextSymbol.text;
          } else if (idx > referIdx && insideRequireForm && isTokenNode2 && isAllNode(node)) {
            result.requires[activeRequireIdx].refer = "all";
          } else if (idx > referIdx && insideRequireForm && isTokenNode2 && nextTokenIsRequireDefaultSymbol) {
            result.requires[activeRequireIdx].default = node.text;
            nextTokenIsRequireDefaultSymbol = false;
          } else if (idx > referIdx && insideRequireForm && parenNestingDepth === inc(referParenNestingDepth) && isTokenNode2 && isTextNode) {
            if (!isArray(result.requires[activeRequireIdx].refer)) {
              result.requires[activeRequireIdx].refer = [];
            }
            const referObj = {
              symbol: node.text
            };
            stackPush(result.requires[activeRequireIdx].refer, referObj);
          } else if (insideRequireForm && !insideRequireList && idx > requireNodeIdx && isTokenNode2 && isTextNode && requireSymbolIdx === -1 && !isKeywordNode(node)) {
            if (!isArray(result.requires)) {
              result.requires = [];
            }
            const requireObj = {
              symbol: node.text
            };
            stackPush(result.requires, requireObj);
            activeRequireIdx = inc(activeRequireIdx);
            requireFormLineNo = lineNo;
            if (arraySize(singleLineComments) > 0) {
              result.requires[activeRequireIdx].commentsAbove = singleLineComments;
              singleLineComments = [];
            }
            if (insideReaderConditional && currentReaderConditionalPlatform) {
              result.requires[activeRequireIdx].platform = currentReaderConditionalPlatform;
            }
          } else if (insidePrefixList && isTokenNode2 && isTextNode) {
            if (!isArray(result.requires)) {
              result.requires = [];
            }
            const namespace = strConcat3(prefixListPrefix, ".", node.text);
            const requireObj = {
              prefixListId: currentPrefixListId,
              symbol: namespace
            };
            stackPush(result.requires, requireObj);
            activeRequireIdx = inc(activeRequireIdx);
            requireSymbolIdx = idx;
            requireFormLineNo = lineNo;
            insidePrefixList = true;
          } else if (insideRequireForm && insideRequireList && requireRenameIdx > 0 && idx > requireRenameIdx && isTokenNode2 && isTextNode) {
            stackPush(renamesTmp, node.text);
            if (arraySize(renamesTmp) === 2) {
              const itm = {};
              itm.fromSymbol = renamesTmp[0];
              itm.toSymbol = renamesTmp[1];
              if (insideReaderConditional && currentReaderConditionalPlatform) {
                itm.platform = currentReaderConditionalPlatform;
              }
              if (!isArray(result.requires[activeRequireIdx].rename)) {
                result.requires[activeRequireIdx].rename = [];
              }
              stackPush(result.requires[activeRequireIdx].rename, itm);
              renamesTmp = [];
            }
          } else if (insideRequireForm && insideRequireList && idx > requireNodeIdx && isTokenNode2 && isTextNode && requireSymbolIdx === -1 && !isKeywordNode(node)) {
            if (!isArray(result.requires)) {
              result.requires = [];
            }
            const nextTokenInsideRequireForm = findNextTokenInsideRequireForm(nodesArr, inc(idx));
            const isPrefixList = nextTokenInsideRequireForm && !isKeywordNode(nextTokenInsideRequireForm);
            if (isPrefixList) {
              const prefixListId = createId();
              insidePrefixList = true;
              prefixListLineNo = lineNo;
              prefixListPrefix = node.text;
              currentPrefixListId = prefixListId;
              if (arraySize(singleLineComments) > 0) {
                const itm = {
                  commentsAbove: singleLineComments
                };
                prefixListComments[prefixListId] = itm;
                singleLineComments = [];
              }
            } else {
              const requireObj = {
                symbol: node.text
              };
              stackPush(result.requires, requireObj);
              activeRequireIdx = inc(activeRequireIdx);
              requireSymbolIdx = idx;
              requireFormLineNo = lineNo;
              insidePrefixList = false;
              prefixListLineNo = -1;
              if (arraySize(singleLineComments) > 0) {
                result.requires[activeRequireIdx].commentsAbove = singleLineComments;
                singleLineComments = [];
              }
              if (insideReaderConditional && currentReaderConditionalPlatform) {
                result.requires[activeRequireIdx].platform = currentReaderConditionalPlatform;
              }
            }
          } else if (insideRequireForm && insideRequireList && idx > requireNodeIdx && isRenameKeyword(node)) {
            requireRenameIdx = idx;
            renamesTmp = [];
          } else if (insideRequireForm && insideRequireList && idx > requireNodeIdx && isStringNode(node)) {
            if (!isArray(result.requires)) {
              result.requires = [];
            }
            const requireObj = {};
            stackPush(result.requires, requireObj);
            activeRequireIdx = inc(activeRequireIdx);
            requireFormLineNo = lineNo;
            if (arraySize(singleLineComments) > 0) {
              result.requires[activeRequireIdx].commentsAbove = singleLineComments;
              singleLineComments = [];
            }
            if (insideReaderConditional && currentReaderConditionalPlatform) {
              result.requires[activeRequireIdx].platform = currentReaderConditionalPlatform;
            }
            result.requires[activeRequireIdx].symbol = strConcat3('"', getTextFromStringNode(node), '"');
            result.requires[activeRequireIdx].symbolIsString = true;
          } else if (insideImportForm && idx > importNodeIdx && !insideImportPackageList && isTokenNode2 && isTextNode) {
            if (!result.importsObj) {
              result.importsObj = {};
            }
            const packageParsed = parseJavaPackageWithClass(node.text);
            const packageName = packageParsed.package;
            const className = packageParsed.className;
            if (!result.importsObj[packageName]) {
              result.importsObj[packageName] = {
                classes: []
              };
            }
            stackPush(result.importsObj[packageName].classes, className);
            activeImportPackageName = packageName;
            importFormLineNo = lineNo;
            if (arraySize(singleLineComments) > 0) {
              result.importsObj[packageName].commentsAbove = singleLineComments;
              singleLineComments = [];
            }
            if (insideReaderConditional && currentReaderConditionalPlatform) {
              result.importsObj[packageName].platform = currentReaderConditionalPlatform;
            }
          } else if (insideImportPackageList && isTokenNode2 && isTextNode) {
            if (!importPackageListFirstToken) {
              const packageName = node.text;
              importPackageListFirstToken = packageName;
              activeImportPackageName = packageName;
              importFormLineNo = lineNo;
              if (!result.importsObj) {
                result.importsObj = {};
              }
              if (!result.importsObj[packageName]) {
                result.importsObj[packageName] = {
                  classes: []
                };
              }
              if (arraySize(singleLineComments) > 0) {
                result.importsObj[packageName].commentsAbove = singleLineComments;
                singleLineComments = [];
              }
              if (insideReaderConditional && currentReaderConditionalPlatform) {
                result.importsObj[packageName].platform = currentReaderConditionalPlatform;
              }
            } else {
              stackPush(result.importsObj[importPackageListFirstToken].classes, node.text);
            }
          } else if (insideGenClass && idx === genClassNodeIdx) {
            result.genClass = {};
            result.genClass.isEmpty = true;
            if (insideReaderConditional && currentReaderConditionalPlatform) {
              result.genClass.platform = currentReaderConditionalPlatform;
            }
            if (arraySize(singleLineComments) > 0) {
              result.genClass.commentsAbove = singleLineComments;
              singleLineComments = [];
            }
            genClassLineNo = lineNo;
          } else if (insideGenClass && idx > genClassNodeIdx && isTextNode && genClassToggle === 0 && isGenClassKeyword(node)) {
            result.genClass.isEmpty = false;
            genClassKeyStr = substr(node.text, 1, -1);
            result.genClass[genClassKeyStr] = {};
            if (arraySize(singleLineComments) > 0) {
              result.genClass[genClassKeyStr].commentsAbove = singleLineComments;
              singleLineComments = [];
            }
            genClassToggle = 1;
          } else if (insideGenClass && idx > genClassNodeIdx && genClassToggle === 1 && genClassKeyStr === "prefix" && isStringNode(node)) {
            result.genClass.prefix.value = strConcat3('"', getTextFromStringNode(node), '"');
            genClassToggle = 0;
            genClassValueLineNo = lineNo;
          } else if (insideGenClass && idx > genClassNodeIdx && isTextNode && isTokenNode2 && genClassToggle === 1) {
            if (isGenClassNameKey(genClassKeyStr)) {
              result.genClass[genClassKeyStr].value = node.text;
              genClassToggle = 0;
              genClassValueLineNo = lineNo;
            } else if (isGenClassBooleanKey(genClassKeyStr)) {
              if (node.text === "true") {
                result.genClass[genClassKeyStr].value = true;
                genClassToggle = 0;
                genClassValueLineNo = lineNo;
              } else if (node.text === "false") {
                result.genClass[genClassKeyStr].value = false;
                genClassToggle = 0;
                genClassValueLineNo = lineNo;
              } else {
              }
            }
          }
          if (currentNodeIsNewline) {
            lineNo = inc(lineNo);
          }
          prevNodeIsNewline = currentNodeIsNewline;
          idx = inc(idx);
          if (idx >= numNodes) {
            continueParsingNsForm = false;
          } else if (nsNodeIdx > 0 && !insideNsForm && lineNo >= inc(inc(nsFormEndsLineIdx))) {
            continueParsingNsForm = false;
          }
        }
        return sortNsResult(result, prefixListComments);
      }
      function printCommentsAbove(outTxt, commentsAbove, indentationStr) {
        if (isArray(commentsAbove)) {
          const numCommentLines = arraySize(commentsAbove);
          let idx = 0;
          while (idx < numCommentLines) {
            const commentLine = strConcat(indentationStr, commentsAbove[idx]);
            outTxt = strConcat3(outTxt, commentLine, "\n");
            idx = inc(idx);
          }
        }
        return outTxt;
      }
      function getPlatformsFromArray(arr) {
        let hasDefault = false;
        const platforms = {};
        const numItms = arraySize(arr);
        let idx = 0;
        while (idx < numItms) {
          const itm = arr[idx];
          if (itm.platform) {
            if (itm.platform === ":default") {
              hasDefault = true;
            } else {
              platforms[itm.platform] = true;
            }
          }
          idx = inc(idx);
        }
        const platformsArr = [];
        objectForEach(platforms, function(platformStr, _ignore) {
          stackPush(platformsArr, platformStr);
        });
        platformsArr.sort();
        if (hasDefault) {
          stackPush(platformsArr, ":default");
        }
        return platformsArr;
      }
      function onlyOneRequirePerPlatform(reqs) {
        const platformCounts = {};
        const numReqs = arraySize(reqs);
        let idx = 0;
        let keepSearching = true;
        let result = true;
        while (keepSearching) {
          if (reqs[idx] && reqs[idx].platform && isString(reqs[idx].platform)) {
            const platform = reqs[idx].platform;
            if (platform !== "") {
              if (platformCounts[platform]) {
                keepSearching = false;
                result = false;
              } else {
                platformCounts[platform] = 1;
              }
            }
          }
          idx = inc(idx);
          if (idx > numReqs) {
            keepSearching = false;
          }
        }
        return result;
      }
      function filterOnPlatform(arr, platform) {
        const filteredReqs = [];
        let idx = 0;
        const numReqs = arraySize(arr);
        while (idx < numReqs) {
          const itm = arr[idx];
          if (platform === false && !itm.platform) {
            stackPush(filteredReqs, itm);
          } else if (isString(itm.platform) && itm.platform === platform) {
            stackPush(filteredReqs, arr[idx]);
          }
          idx = inc(idx);
        }
        return filteredReqs;
      }
      function formatRequireLine(req, initialIndentation) {
        let outTxt = "";
        outTxt = printCommentsAbove(outTxt, req.commentsAbove, initialIndentation);
        outTxt = strConcat(outTxt, initialIndentation);
        outTxt = strConcat3(outTxt, "[", req.symbol);
        if (isString(req.as) && req.as !== "") {
          outTxt = strConcat3(outTxt, " :as ", req.as);
        } else if (isString(req.asAlias) && req.asAlias !== "") {
          outTxt = strConcat3(outTxt, " :as-alias ", req.asAlias);
        } else if (isString(req.default) && req.default !== "") {
          outTxt = strConcat3(outTxt, " :default ", req.default);
        }
        if (isArray(req.refer) && arraySize(req.refer) > 0) {
          outTxt = strConcat(outTxt, " :refer [");
          const referSymbols = arrayPluck(req.refer, "symbol");
          outTxt = strConcat(outTxt, strJoin(referSymbols, " "));
          outTxt = strConcat(outTxt, "]");
        } else if (req.refer === "all") {
          outTxt = strConcat(outTxt, " :refer :all");
        }
        if (isArray(req.exclude) && arraySize(req.exclude) > 0) {
          outTxt = strConcat(outTxt, " :exclude [");
          const excludeSymbols = arrayPluck(req.exclude, "symbol");
          outTxt = strConcat(outTxt, strJoin(excludeSymbols, " "));
          outTxt = strConcat(outTxt, "]");
        }
        if (req.includeMacros === true) {
          outTxt = strConcat(outTxt, " :include-macros true");
        } else if (req.includeMacros === false) {
          outTxt = strConcat(outTxt, " :include-macros false");
        }
        if (isArray(req.referMacros) && arraySize(req.referMacros) > 0) {
          outTxt = strConcat(outTxt, " :refer-macros [");
          outTxt = strConcat(outTxt, strJoin(req.referMacros, " "));
          outTxt = strConcat(outTxt, "]");
        }
        if (isArray(req.rename) && arraySize(req.rename) > 0) {
          outTxt = strConcat(outTxt, " :rename {");
          outTxt = strConcat(outTxt, formatRenamesList(req.rename));
          outTxt = strConcat(outTxt, "}");
        }
        outTxt = strConcat(outTxt, "]");
        return outTxt;
      }
      function getReferClojureKeys(referClojure) {
        const keys = [];
        if (referClojure) {
          if (referClojure.exclude) {
            stackPush(keys, ":exclude");
          }
          if (referClojure.only) {
            stackPush(keys, ":only");
          }
          if (referClojure.rename) {
            stackPush(keys, ":rename");
          }
        }
        return keys;
      }
      function formatKeywordFollowedByListOfSymbols(kwd, symbols) {
        let s = strConcat(kwd, " [");
        s = strConcat(s, strJoin(symbols, " "));
        s = strConcat(s, "]");
        return s;
      }
      function formatRenamesList(itms) {
        let s = "";
        const numItms = arraySize(itms);
        let idx = 0;
        while (idx < numItms) {
          s = strConcat(s, itms[idx].fromSymbol);
          s = strConcat(s, " ");
          s = strConcat(s, itms[idx].toSymbol);
          if (inc(idx) < numItms) {
            s = strConcat(s, ", ");
          }
          idx = inc(idx);
        }
        return s;
      }
      function formatReferClojureSingleKeyword(ns, excludeOrOnly) {
        const symbolsArr = ns.referClojure[excludeOrOnly];
        const kwd = strConcat(":", excludeOrOnly);
        const platforms = getPlatformsFromArray(symbolsArr);
        const numPlatforms = arraySize(platforms);
        const symbolsForAllPlatforms = arrayPluck(filterOnPlatform(symbolsArr, false), "symbol");
        const numSymbolsForAllPlatforms = arraySize(symbolsForAllPlatforms);
        if (numPlatforms === 0) {
          let s = "\n";
          s = printCommentsAbove(s, ns.referClojureCommentsAbove, "  ");
          s = strConcat(s, "  (:refer-clojure ");
          s = strConcat(s, formatKeywordFollowedByListOfSymbols(kwd, symbolsForAllPlatforms));
          s = strConcat(s, ")");
          return s;
        } else if (numPlatforms === 1 && numSymbolsForAllPlatforms === 0) {
          const symbols2 = arrayPluck(symbolsArr, "symbol");
          let s = strConcat3("\n  #?(", platforms[0], "\n");
          s = printCommentsAbove(s, ns.referClojureCommentsAbove, "     ");
          s = strConcat(s, "     (:refer-clojure ");
          s = strConcat(s, formatKeywordFollowedByListOfSymbols(kwd, symbols2));
          s = strConcat(s, "))");
          return s;
        } else if (numPlatforms > 1 && numSymbolsForAllPlatforms === 0) {
          let s = "\n";
          s = printCommentsAbove(s, ns.referClojureCommentsAbove, "  ");
          s = strConcat(s, "  (:refer-clojure\n");
          s = strConcat3(s, "    ", kwd);
          s = strConcat(s, " #?@(");
          let platformIdx = 0;
          while (platformIdx < numPlatforms) {
            const platform = platforms[platformIdx];
            const symbolsForPlatform = arrayPluck(filterOnPlatform(symbolsArr, platform), "symbol");
            s = strConcat(s, formatKeywordFollowedByListOfSymbols(platform, symbolsForPlatform));
            if (inc(platformIdx) !== numPlatforms) {
              if (kwd === ":exclude") {
                s = strConcat3(s, "\n", repeatString(" ", 17));
              } else if (kwd === ":only") {
                s = strConcat3(s, "\n", repeatString(" ", 14));
              } else {
              }
            }
            platformIdx = inc(platformIdx);
          }
          s = strConcat(s, "))");
          return s;
        } else {
          let s = "\n";
          s = printCommentsAbove(s, ns.referClojureCommentsAbove, "  ");
          s = strConcat(s, "  (:refer-clojure\n");
          s = strConcat3(s, "    ", kwd);
          s = strConcat(s, " [");
          s = strConcat(s, strJoin(symbolsForAllPlatforms, " "));
          if (kwd === ":exclude") {
            s = strConcat3(s, "\n", repeatString(" ", 14));
          } else if (kwd === ":only") {
            s = strConcat3(s, "\n", repeatString(" ", 11));
          } else {
          }
          s = strConcat(s, "#?@(");
          let platformIdx = 0;
          while (platformIdx < numPlatforms) {
            const platform = platforms[platformIdx];
            const symbolsForPlatform = arrayPluck(filterOnPlatform(symbolsArr, platform), "symbol");
            s = strConcat(s, formatKeywordFollowedByListOfSymbols(platform, symbolsForPlatform));
            if (inc(platformIdx) !== numPlatforms) {
              if (kwd === ":exclude") {
                s = strConcat3(s, "\n", repeatString(" ", 18));
              } else if (kwd === ":only") {
                s = strConcat3(s, "\n", repeatString(" ", 15));
              }
            }
            platformIdx = inc(platformIdx);
          }
          s = strConcat(s, ")])");
          return s;
        }
      }
      function formatReferClojure(ns) {
        const keys = getReferClojureKeys(ns.referClojure);
        const numKeys = arraySize(keys);
        if (numKeys === 0) {
          return "";
        } else if (numKeys === 1 && keys[0] === ":exclude") {
          return formatReferClojureSingleKeyword(ns, "exclude");
        } else if (numKeys === 1 && keys[0] === ":only") {
          return formatReferClojureSingleKeyword(ns, "only");
        } else if (numKeys === 1 && keys[0] === ":rename") {
          const platforms = getPlatformsFromArray(ns.referClojure.rename);
          const numPlatforms = arraySize(platforms);
          const nonPlatformSpecificRenames = filterOnPlatform(ns.referClojure.rename, false);
          const numNonPlatformSpecificRenames = arraySize(nonPlatformSpecificRenames);
          const allRenamesForSamePlatform = numNonPlatformSpecificRenames === 0 && arraySize(platforms) > 0;
          if (numPlatforms === 0) {
            let s = "\n";
            s = printCommentsAbove(s, ns.referClojureCommentsAbove, "  ");
            s = strConcat(s, "  (:refer-clojure :rename {");
            s = strConcat(s, formatRenamesList(ns.referClojure.rename));
            s = strConcat(s, "})");
            return s;
          } else if (numPlatforms === 1 && allRenamesForSamePlatform) {
            let s = strConcat3("\n  #?(", platforms[0], "\n");
            s = printCommentsAbove(s, ns.referClojureCommentsAbove, "     ");
            s = strConcat(s, "     (:refer-clojure :rename {");
            s = strConcat(s, formatRenamesList(ns.referClojure.rename));
            s = strConcat(s, "}))");
            return s;
          } else {
            let s = "\n  (:refer-clojure\n    :rename {";
            s = strConcat(s, formatRenamesList(nonPlatformSpecificRenames));
            s = strConcat(s, "\n             #?@(");
            let platformIdx = 0;
            while (platformIdx < numPlatforms) {
              const platformStr = platforms[platformIdx];
              const platformRenames = filterOnPlatform(ns.referClojure.rename, platformStr);
              if (platformIdx === 0) {
                s = strConcat3(s, platformStr, " [");
              } else {
                s = strConcat(s, "\n                 ");
                s = strConcat3(s, platformStr, " [");
              }
              s = strConcat(s, formatRenamesList(platformRenames));
              s = strConcat(s, "]");
              platformIdx = inc(platformIdx);
            }
            s = strConcat(s, ")})");
            return s;
          }
        } else {
          let s = "\n  (:refer-clojure";
          if (ns.referClojure.exclude && arraySize(ns.referClojure.exclude) > 0) {
            const excludeSymbols = arrayPluck(ns.referClojure.exclude, "symbol");
            s = strConcat(s, "\n    ");
            s = strConcat(s, formatKeywordFollowedByListOfSymbols(":exclude", excludeSymbols));
          }
          if (ns.referClojure.only && arraySize(ns.referClojure.only) > 0) {
            const onlySymbols = arrayPluck(ns.referClojure.only, "symbol");
            s = strConcat(s, "\n    ");
            s = strConcat(s, formatKeywordFollowedByListOfSymbols(":only", onlySymbols));
          }
          if (ns.referClojure.rename && arraySize(ns.referClojure.rename) > 0) {
            s = strConcat(s, "\n    :rename {");
            s = strConcat(s, formatRenamesList(ns.referClojure.rename));
            s = strConcat(s, "}");
          }
          s = strConcat(s, ")");
          return s;
        }
      }
      function formatNs(ns) {
        let outTxt = strConcat("(ns ", ns.nsSymbol);
        let numRequireMacros = 0;
        if (isArray(ns.requireMacros)) {
          numRequireMacros = arraySize(ns.requireMacros);
        }
        let numRequires = 0;
        if (isArray(ns.requires)) {
          numRequires = arraySize(ns.requires);
        }
        let numImports = 0;
        if (isArray(ns.imports)) {
          numImports = arraySize(ns.imports);
        }
        let commentOutsideNsForm2 = null;
        const hasGenClass = !!ns.genClass;
        const importsIsLastMainForm = numImports > 0 && !hasGenClass;
        const requireIsLastMainForm = numRequires > 0 && !importsIsLastMainForm && !hasGenClass;
        const requireMacrosIsLastMainForm = numRequireMacros > 0 && numRequires === 0 && numImports === 0 && !hasGenClass;
        const referClojureIsLastMainForm = ns.referClojure && numRequireMacros === 0 && numRequires === 0 && numImports === 0 && !hasGenClass;
        let trailingParensArePrinted = false;
        if (isString(ns.docstring)) {
          outTxt = strConcat(outTxt, '\n  "');
          outTxt = strConcat(outTxt, ns.docstring);
          outTxt = strConcat(outTxt, '"');
        }
        if (isArray(ns.nsMetadata)) {
          const numMetadataItms = arraySize(ns.nsMetadata);
          if (numMetadataItms > 0) {
            let metadataItmsIdx = 0;
            outTxt = strConcat(outTxt, "\n  {");
            while (metadataItmsIdx < numMetadataItms) {
              const metadataItm = ns.nsMetadata[metadataItmsIdx];
              outTxt = strConcat3(outTxt, metadataItm.key, " ");
              outTxt = strConcat(outTxt, metadataItm.value);
              metadataItmsIdx = inc(metadataItmsIdx);
              if (metadataItmsIdx !== numMetadataItms) {
                outTxt = strConcat(outTxt, "\n   ");
              }
            }
            outTxt = strConcat(outTxt, "}");
          }
        }
        if (ns.referClojure) {
          outTxt = strConcat(outTxt, formatReferClojure(ns));
          if (isStringWithChars(ns.referClojureCommentAfter)) {
            if (referClojureIsLastMainForm) {
              commentOutsideNsForm2 = ns.referClojureCommentAfter;
            } else {
              outTxt = strConcat3(outTxt, " ", ns.referClojureCommentAfter);
            }
          }
        }
        if (numRequireMacros > 0) {
          const cljsPlatformRequireMacros = filterOnPlatform(ns.requireMacros, ":cljs");
          const wrapRequireMacrosWithReaderConditional = arraySize(cljsPlatformRequireMacros) === numRequireMacros;
          let rmLastLineCommentAfter = null;
          let rmIndentation = "   ";
          if (wrapRequireMacrosWithReaderConditional) {
            outTxt = strConcat(outTxt, "\n");
            outTxt = strConcat(outTxt, "  #?(:cljs\n");
            outTxt = printCommentsAbove(outTxt, ns.requireMacrosCommentsAbove, "     ");
            outTxt = strConcat(outTxt, "     (:require-macros\n");
            rmIndentation = "      ";
          } else {
            outTxt = strConcat(outTxt, "\n");
            outTxt = printCommentsAbove(outTxt, ns.requireMacrosCommentsAbove, "  ");
            outTxt = strConcat(outTxt, "  (:require-macros\n");
          }
          let rmIdx = 0;
          while (rmIdx < numRequireMacros) {
            const rm = ns.requireMacros[rmIdx];
            const isLastRequireMacroLine = inc(rmIdx) === numRequireMacros;
            outTxt = strConcat(outTxt, formatRequireLine(rm, rmIndentation));
            if (isStringWithChars(rm.commentAfter)) {
              if (isLastRequireMacroLine) {
                rmLastLineCommentAfter = rm.commentAfter;
              } else {
                outTxt = strConcat3(outTxt, " ", rm.commentAfter);
              }
            }
            if (!isLastRequireMacroLine) {
              outTxt = strConcat(outTxt, "\n");
            }
            rmIdx = inc(rmIdx);
          }
          if (!requireMacrosIsLastMainForm && !wrapRequireMacrosWithReaderConditional) {
            outTxt = strConcat(outTxt, ")");
          } else if (!requireMacrosIsLastMainForm && wrapRequireMacrosWithReaderConditional) {
            outTxt = strConcat(outTxt, "))");
          } else if (requireMacrosIsLastMainForm && !wrapRequireMacrosWithReaderConditional) {
            outTxt = strConcat(outTxt, "))");
            trailingParensArePrinted = true;
          } else if (requireMacrosIsLastMainForm && wrapRequireMacrosWithReaderConditional) {
            outTxt = strConcat(outTxt, ")))");
            trailingParensArePrinted = true;
          }
          if (isStringWithChars(rmLastLineCommentAfter)) {
            outTxt = strConcat3(outTxt, " ", rmLastLineCommentAfter);
          }
        }
        if (numRequires > 0) {
          let closeRequireParenTrail = ")";
          let lastRequireHasComment = false;
          let lastRequireComment = null;
          const reqPlatforms = getPlatformsFromArray(ns.requires);
          const numPlatforms = arraySize(reqPlatforms);
          let allRequiresUnderOnePlatform = false;
          if (numPlatforms === 1) {
            const onePlatformRequires = filterOnPlatform(ns.requires, reqPlatforms[0]);
            if (numRequires === arraySize(onePlatformRequires)) {
              allRequiresUnderOnePlatform = true;
            }
          }
          let requireLineIndentation = "   ";
          if (allRequiresUnderOnePlatform) {
            outTxt = strConcat(outTxt, "\n  #?(");
            outTxt = strConcat(outTxt, reqPlatforms[0]);
            if (isArray(ns.requireCommentsAbove) && arraySize(ns.requireCommentsAbove) > 0) {
              outTxt = strConcat(outTxt, "\n     ");
              outTxt = strConcat(outTxt, strJoin(ns.requireCommentsAbove, "\n     "));
            }
            outTxt = strConcat(outTxt, "\n     (:require");
            if (isString(ns.requireCommentAfter) && ns.requireCommentAfter !== "") {
              outTxt = strConcat3(outTxt, " ", ns.requireCommentAfter);
            }
            outTxt = strConcat(outTxt, "\n");
            requireLineIndentation = "      ";
          } else {
            if (isArray(ns.requireCommentsAbove) && arraySize(ns.requireCommentsAbove) > 0) {
              outTxt = strConcat(outTxt, "\n  ");
              outTxt = strConcat(outTxt, strJoin(ns.requireCommentsAbove, "\n  "));
            }
            outTxt = strConcat(outTxt, "\n  (:require\n");
          }
          let requiresIdx = 0;
          while (requiresIdx < numRequires) {
            const req = ns.requires[requiresIdx];
            const isLastRequire1 = inc(requiresIdx) === numRequires;
            if (!req.platform || allRequiresUnderOnePlatform) {
              outTxt = strConcat(outTxt, formatRequireLine(req, requireLineIndentation));
              if (req.commentAfter && !isLastRequire1) {
                outTxt = strConcat(outTxt, " ");
                outTxt = strConcat(outTxt, req.commentAfter);
                outTxt = strConcat(outTxt, "\n");
              } else if (isLastRequire1 && req.commentAfter && requireIsLastMainForm && !allRequiresUnderOnePlatform) {
                closeRequireParenTrail = strConcat(")) ", req.commentAfter);
                trailingParensArePrinted = true;
              } else if (isLastRequire1 && req.commentAfter && allRequiresUnderOnePlatform) {
                lastRequireComment = req.commentAfter;
                lastRequireHasComment = true;
              } else if (isLastRequire1 && req.commentAfter) {
                closeRequireParenTrail = strConcat(") ", req.commentAfter);
              } else if (isLastRequire1 && !req.commentAfter) {
                closeRequireParenTrail = ")";
              } else {
                outTxt = strConcat(outTxt, "\n");
              }
            }
            requiresIdx = inc(requiresIdx);
          }
          let platformIdx = 0;
          const requireBlockHasReaderConditionals = numPlatforms > 0;
          const useStandardReaderConditional = onlyOneRequirePerPlatform(ns.requires);
          if (!allRequiresUnderOnePlatform) {
            if (useStandardReaderConditional) {
              while (platformIdx < numPlatforms) {
                const platform = reqPlatforms[platformIdx];
                if (platformIdx === 0) {
                  outTxt = strTrim(outTxt);
                  outTxt = strConcat3(outTxt, "\n   #?(", platform);
                  outTxt = strConcat(outTxt, " ");
                } else {
                  outTxt = strConcat(outTxt, "\n      ");
                  outTxt = strConcat3(outTxt, platform, " ");
                }
                const platformRequires = filterOnPlatform(ns.requires, platform);
                const req = platformRequires[0];
                outTxt = strConcat(outTxt, formatRequireLine(req, ""));
                platformIdx = inc(platformIdx);
              }
            } else {
              while (platformIdx < numPlatforms) {
                const platform = reqPlatforms[platformIdx];
                const isLastPlatform = inc(platformIdx) === numPlatforms;
                if (platformIdx === 0) {
                  outTxt = strTrim(outTxt);
                  outTxt = strConcat(outTxt, "\n   #?@(");
                  outTxt = strConcat3(outTxt, platform, "\n       [");
                } else {
                  outTxt = strConcat(outTxt, "\n\n       ");
                  outTxt = strConcat3(outTxt, platform, "\n       [");
                }
                const platformRequires = filterOnPlatform(ns.requires, platform);
                const numFilteredReqs = arraySize(platformRequires);
                let printedFirstReqLine = false;
                let printPlatformClosingBracket = true;
                let reqIdx2 = 0;
                while (reqIdx2 < numFilteredReqs) {
                  const req = platformRequires[reqIdx2];
                  const isLastRequireForThisPlatform = inc(reqIdx2) === numFilteredReqs;
                  if (printedFirstReqLine) {
                    outTxt = strConcat(outTxt, formatRequireLine(req, "        "));
                  } else {
                    printedFirstReqLine = true;
                    outTxt = strConcat(outTxt, formatRequireLine(req, ""));
                  }
                  if (req.commentAfter && !isLastRequireForThisPlatform) {
                    outTxt = strConcat(outTxt, " ");
                    outTxt = strConcat(outTxt, req.commentAfter);
                    outTxt = strConcat(outTxt, "\n");
                  } else if (req.commentAfter && isLastRequireForThisPlatform && !isLastPlatform) {
                    outTxt = strConcat3(outTxt, "] ", req.commentAfter);
                    printPlatformClosingBracket = false;
                  } else if (req.commentAfter && isLastRequireForThisPlatform && (isLastPlatform || requireIsLastMainForm)) {
                    lastRequireHasComment = true;
                    lastRequireComment = req.commentAfter;
                  } else if (isLastRequireForThisPlatform && req.commentAfter) {
                    closeRequireParenTrail = strConcat(") ", req.commentAfter);
                  } else if (isLastRequireForThisPlatform && !req.commentAfter) {
                    closeRequireParenTrail = "]";
                  } else {
                    outTxt = strConcat(outTxt, "\n");
                  }
                  reqIdx2 = inc(reqIdx2);
                }
                if (printPlatformClosingBracket) {
                  outTxt = strConcat(outTxt, "]");
                }
                platformIdx = inc(platformIdx);
              }
            }
          }
          if (!requireBlockHasReaderConditionals && !lastRequireHasComment && !requireIsLastMainForm) {
            closeRequireParenTrail = ")";
          } else if (!requireBlockHasReaderConditionals && lastRequireHasComment && !requireIsLastMainForm) {
            closeRequireParenTrail = strConcat(") ", lastRequireComment);
          } else if (requireBlockHasReaderConditionals && !lastRequireHasComment && !requireIsLastMainForm) {
            closeRequireParenTrail = "))";
          } else if (requireBlockHasReaderConditionals && lastRequireHasComment && !requireIsLastMainForm) {
            closeRequireParenTrail = strConcat(")) ", lastRequireComment);
          } else if (requireBlockHasReaderConditionals && !lastRequireHasComment && requireIsLastMainForm) {
            closeRequireParenTrail = ")))";
            trailingParensArePrinted = true;
          } else if (requireBlockHasReaderConditionals && lastRequireHasComment && requireIsLastMainForm) {
            closeRequireParenTrail = strConcat("))) ", lastRequireComment);
            trailingParensArePrinted = true;
          }
          outTxt = strTrim(outTxt);
          outTxt = strConcat(outTxt, closeRequireParenTrail);
        }
        if (numImports > 0) {
          const nonPlatformSpecificImports = filterOnPlatform(ns.imports, false);
          const numNonPlatformSpecificImports = arraySize(nonPlatformSpecificImports);
          const importPlatforms = getPlatformsFromArray(ns.imports);
          const numImportPlatforms = arraySize(importPlatforms);
          let lastImportLineCommentAfter = null;
          let isImportKeywordPrinted = false;
          let importsIdx = 0;
          while (importsIdx < numNonPlatformSpecificImports) {
            if (!isImportKeywordPrinted) {
              outTxt = strConcat(outTxt, "\n  (:import\n");
              isImportKeywordPrinted = true;
            }
            const imp = nonPlatformSpecificImports[importsIdx];
            const isLastImport = inc(importsIdx) === numNonPlatformSpecificImports;
            outTxt = strConcat3(outTxt, "   (", imp.package);
            const numClasses = arraySize(imp.classes);
            let classNameIdx = 0;
            while (classNameIdx < numClasses) {
              const className = imp.classes[classNameIdx];
              outTxt = strConcat3(outTxt, " ", className);
              classNameIdx = inc(classNameIdx);
            }
            outTxt = strConcat(outTxt, ")");
            if (isStringWithChars(imp.commentAfter)) {
              outTxt = strConcat3(outTxt, " ", imp.commentAfter);
            }
            if (!isLastImport) {
              outTxt = strConcat(outTxt, "\n");
            }
            importsIdx = inc(importsIdx);
          }
          let platformIdx = 0;
          let isFirstPlatform = true;
          const importSectionHasReaderConditionals = numImportPlatforms > 0;
          const placeReaderConditionalOutsideOfImport = numImportPlatforms === 1 && numNonPlatformSpecificImports === 0;
          while (platformIdx < numImportPlatforms) {
            const platformStr = importPlatforms[platformIdx];
            if (placeReaderConditionalOutsideOfImport) {
              outTxt = strConcat(outTxt, "\n  #?(");
              outTxt = strConcat(outTxt, platformStr);
              outTxt = strConcat(outTxt, "\n");
              outTxt = strConcat(outTxt, "     (:import\n");
              outTxt = strConcat(outTxt, "      ");
              isImportKeywordPrinted = true;
            } else if (isFirstPlatform) {
              if (!isImportKeywordPrinted) {
                outTxt = strConcat(outTxt, "\n  (:import");
                isImportKeywordPrinted = true;
              }
              outTxt = strConcat3(outTxt, "\n   #?@(", platformStr);
              outTxt = strConcat(outTxt, "\n       [");
              isFirstPlatform = false;
            } else {
              outTxt = strConcat3(outTxt, "\n\n       ", platformStr);
              outTxt = strConcat(outTxt, "\n       [");
            }
            const importsForThisPlatform = filterOnPlatform(ns.imports, platformStr);
            let idx2 = 0;
            const numImports2 = arraySize(importsForThisPlatform);
            while (idx2 < numImports2) {
              const imp = importsForThisPlatform[idx2];
              const isLastImport2 = inc(idx2) === numImports2;
              outTxt = strConcat(outTxt, "(");
              outTxt = strConcat(outTxt, imp.package);
              outTxt = strConcat(outTxt, " ");
              outTxt = strConcat(outTxt, strJoin(imp.classes, " "));
              outTxt = strConcat(outTxt, ")");
              if (isLastImport2) {
                if (!placeReaderConditionalOutsideOfImport) {
                  outTxt = strConcat(outTxt, "]");
                }
                if (isStringWithChars(imp.commentAfter)) {
                  lastImportLineCommentAfter = imp.commentAfter;
                }
              } else {
                if (isStringWithChars(imp.commentAfter)) {
                  outTxt = strConcat3(outTxt, " ", imp.commentAfter);
                }
                if (placeReaderConditionalOutsideOfImport) {
                  outTxt = strConcat(outTxt, "\n      ");
                } else {
                  outTxt = strConcat(outTxt, "\n        ");
                }
              }
              idx2 = inc(idx2);
            }
            platformIdx = inc(platformIdx);
          }
          let closeImportParenTrail = ")";
          if (importsIsLastMainForm && importSectionHasReaderConditionals) {
            closeImportParenTrail = ")))";
            trailingParensArePrinted = true;
          } else if (importsIsLastMainForm && !importSectionHasReaderConditionals) {
            closeImportParenTrail = "))";
            trailingParensArePrinted = true;
          }
          outTxt = strConcat(outTxt, closeImportParenTrail);
          if (isStringWithChars(lastImportLineCommentAfter)) {
            outTxt = strConcat3(outTxt, " ", lastImportLineCommentAfter);
          }
        }
        if (hasGenClass) {
          let genClassIndentationLevel = 2;
          outTxt = strConcat(outTxt, "\n");
          const isGenClassBehindReaderConditional = ns.genClass.platform === ":clj";
          if (isGenClassBehindReaderConditional) {
            outTxt = strConcat(outTxt, "  #?(:clj\n");
            genClassIndentationLevel = 5;
          }
          const indentationStr = repeatString(" ", genClassIndentationLevel);
          outTxt = printCommentsAbove(outTxt, ns.genClass.commentsAbove, indentationStr);
          outTxt = strConcat(outTxt, indentationStr);
          outTxt = strConcat(outTxt, "(:gen-class");
          let commentAfterGenClass = null;
          if (ns.genClass.isEmpty) {
            if (isStringWithChars(ns.genClass.commentAfter)) {
              commentAfterGenClass = ns.genClass.commentAfter;
            }
          } else {
            if (isStringWithChars(ns.genClass.commentAfter)) {
              outTxt = strConcat3(outTxt, " ", ns.genClass.commentAfter);
            }
            const genClassValueIndentationLevel = inc(genClassIndentationLevel);
            const indentationStr2 = repeatString(" ", genClassValueIndentationLevel);
            let idx3 = 0;
            const numGenClassKeys = arraySize(genClassKeys);
            while (idx3 < numGenClassKeys) {
              const genClassKey = genClassKeys[idx3];
              const genClassValue = ns.genClass[genClassKey];
              if (genClassValue) {
                if (isStringWithChars(commentAfterGenClass)) {
                  outTxt = strConcat3(outTxt, " ", commentAfterGenClass);
                  commentAfterGenClass = null;
                }
                outTxt = strConcat(outTxt, "\n");
                outTxt = printCommentsAbove(outTxt, genClassValue.commentsAbove, indentationStr2);
                outTxt = strConcat(outTxt, indentationStr2);
                outTxt = strConcat3(outTxt, ":", genClassKey);
                outTxt = strConcat3(outTxt, " ", genClassValue.value);
                if (isStringWithChars(genClassValue.commentAfter)) {
                  commentAfterGenClass = genClassValue.commentAfter;
                }
              }
              idx3 = inc(idx3);
            }
          }
          if (!isGenClassBehindReaderConditional && !commentAfterGenClass) {
            outTxt = strConcat(outTxt, "))");
            trailingParensArePrinted = true;
          } else if (isGenClassBehindReaderConditional && !commentAfterGenClass) {
            outTxt = strConcat(outTxt, ")))");
            trailingParensArePrinted = true;
          } else if (!isGenClassBehindReaderConditional && isStringWithChars(commentAfterGenClass)) {
            outTxt = strConcat3(outTxt, ")) ", commentAfterGenClass);
            trailingParensArePrinted = true;
          } else if (isGenClassBehindReaderConditional && isStringWithChars(commentAfterGenClass)) {
            outTxt = strConcat3(outTxt, "))) ", commentAfterGenClass);
            trailingParensArePrinted = true;
          }
        }
        if (!trailingParensArePrinted) {
          outTxt = strConcat(outTxt, ")");
        }
        if (isStringWithChars(commentOutsideNsForm2)) {
          outTxt = strConcat3(outTxt, " ", commentOutsideNsForm2);
        }
        return outTxt;
      }
      function formatNodes(nodesArr, parsedNs) {
        const numNodes = arraySize(nodesArr);
        let parenNestingDepth = 0;
        let idx = 0;
        let outTxt = "";
        let outputTxtContainsChars = false;
        let lineTxt = "";
        let lineIdx = 0;
        let insideNsForm = false;
        let lineIdxOfClosingNsForm = -1;
        let nsStartStringIdx = -1;
        let nsEndStringIdx = -1;
        let taggedNodeIdx = -1;
        let ignoreNodesStartId = -1;
        let ignoreNodesEndId = -1;
        let insideTheIgnoreZone = false;
        const parenStack = [];
        let nodesWeHavePrintedOnThisLine = [];
        let colIdx = 0;
        while (idx < numNodes) {
          const node = nodesArr[idx];
          if (ignoreNodesStartId > 0 && node.id === ignoreNodesStartId) {
            insideTheIgnoreZone = true;
            outTxt = strConcat(outTxt, lineTxt);
            lineTxt = "";
          }
          if (insideTheIgnoreZone) {
            if (isString(node.text) && node.text !== "") {
              outTxt = strConcat(outTxt, node.text);
            }
            if (node.id === ignoreNodesEndId) {
              ignoreNodesStartId = -1;
              ignoreNodesEndId = -1;
              insideTheIgnoreZone = false;
            }
          } else {
            if (idx === 0) {
              nodesArr = recordOriginalColIndexes(nodesArr, idx);
            }
            if (nsStartStringIdx === -1 && parenNestingDepth === 1 && isNsNode(node)) {
              insideNsForm = true;
              nsStartStringIdx = strLen(strConcat(outTxt, lineTxt));
            }
            const nextTextNode = findNextNodeWithText(nodesArr, inc(idx));
            const isLastNode = inc(idx) >= numNodes;
            const currentNodeIsWhitespace = isWhitespaceNode(node);
            const currentNodeIsNewline = isNewlineNode(node);
            const currentNodeIsTag = isTagNode(node);
            let skipPrintingThisNode = false;
            if (isStandardCljIgnoreKeyword(node) && idx > 1) {
              const prevNode1 = findPrevNodeWithText(nodesArr, idx, node.id);
              let prevNode2 = null;
              if (prevNode1) {
                prevNode2 = findPrevNodeWithText(nodesArr, idx, prevNode1.id);
              }
              const isDiscardMap = prevNode1.name === ".open" && prevNode1.text === "{" && prevNode2 && isDiscardNode(prevNode2);
              if (isDiscardNode(prevNode1) || isWhitespaceNode(prevNode1) && isDiscardNode(prevNode2)) {
                const nextIgnoreNode = findNextNonWhitespaceNode(nodesArr, inc(idx));
                if (isArray(nextIgnoreNode.children) && arraySize(nextIgnoreNode.children) > 0) {
                  const closingNode = arrayLast(nextIgnoreNode.children);
                  ignoreNodesStartId = nextIgnoreNode.id;
                  ignoreNodesEndId = closingNode.id;
                } else {
                  const nextImmediateNode = nodesArr[inc(idx)];
                  ignoreNodesStartId = nextImmediateNode.id;
                  ignoreNodesEndId = nextIgnoreNode.id;
                }
              } else if (isDiscardMap) {
                const openingBraceNode = findPrevNodeWithPredicate(nodesArr, idx, isOpeningBraceNode);
                const closingBraceNodeId = openingBraceNode.children[2].id;
                const startIgnoreNode = findNextNodeWithPredicateAfterSpecificNode(nodesArr, idx, alwaysTrue, closingBraceNodeId);
                const firstNodeInsideIgnoreZone = findNextNodeWithPredicateAfterSpecificNode(nodesArr, idx, alwaysTrue, startIgnoreNode.id);
                if (isArray(firstNodeInsideIgnoreZone.children) && arraySize(firstNodeInsideIgnoreZone.children) > 0) {
                  const closingNode = arrayLast(firstNodeInsideIgnoreZone.children);
                  ignoreNodesStartId = startIgnoreNode.id;
                  ignoreNodesEndId = closingNode.id;
                } else {
                  ignoreNodesStartId = startIgnoreNode.id;
                  ignoreNodesEndId = firstNodeInsideIgnoreZone.id;
                }
              }
            }
            if (isParenOpener(node)) {
              const topOfTheParenStack2 = stackPeek(parenStack, 0);
              if (topOfTheParenStack2) {
                const onOpeningLineOfParenStack = lineIdx === topOfTheParenStack2._parenOpenerLineIdx;
                if (onOpeningLineOfParenStack) {
                  node._colIdx = colIdx;
                  node._lineIdx = lineIdx;
                  stackPush(topOfTheParenStack2._openingLineNodes, node);
                }
              }
              parenNestingDepth = inc(parenNestingDepth);
              const parenStackNode = node;
              parenStackNode._colIdx = colIdx;
              parenStackNode._nextWithText = nextTextNode;
              parenStackNode._parenOpenerLineIdx = lineIdx;
              parenStackNode._openingLineNodes = [];
              parenStackNode._rule3Active = false;
              parenStackNode._rule3NumSpaces = 0;
              parenStackNode._rule3SearchComplete = false;
              stackPush(parenStack, parenStackNode);
              if (isWhitespaceNode(nextTextNode)) {
                nextTextNode.text = "";
              }
            } else if (isParenCloser(node)) {
              parenNestingDepth = dec(parenNestingDepth);
              stackPop(parenStack);
              if (insideNsForm && parenNestingDepth === 0) {
                insideNsForm = false;
                nsEndStringIdx = strLen(strConcat(outTxt, lineTxt));
                lineIdxOfClosingNsForm = lineIdx;
              }
            }
            if (node.name === ".tag") {
              taggedNodeIdx = idx;
            }
            const topOfTheParenStack = stackPeek(parenStack, 0);
            if (topOfTheParenStack && nodeContainsText(node)) {
              const onOpeningLineOfParenStack = lineIdx === topOfTheParenStack._parenOpenerLineIdx;
              if (onOpeningLineOfParenStack) {
                if (taggedNodeIdx === dec(idx)) {
                  node._nodeIsTagLiteral = true;
                }
                node._colIdx = colIdx;
                node._lineIdx = lineIdx;
                stackPush(topOfTheParenStack._openingLineNodes, node);
              }
            }
            if (currentNodeIsWhitespace && !currentNodeIsNewline && isParenCloser(nextTextNode)) {
              skipPrintingThisNode = true;
            }
            const parenStackSize = arraySize(parenStack);
            if (parenStackSize > 0 && !insideNsForm) {
              const isCommentFollowedByNewline = isCommentNode(node) && nextTextNode && isNewlineNode(nextTextNode);
              const isNewline = isNewlineNode(node);
              const hasCommasAfterNewline2 = hasCommasAfterNewline(node) || nextTextNode && hasCommasAfterNewline(nextTextNode);
              let lookForwardToSlurpNodes = false;
              if (hasCommasAfterNewline2) {
                lookForwardToSlurpNodes = false;
              } else if (isCommentFollowedByNewline) {
                lookForwardToSlurpNodes = true;
              } else if (isNewline) {
                lookForwardToSlurpNodes = true;
              }
              if (lookForwardToSlurpNodes) {
                const parenTrailClosers = findForwardClosingParens(nodesArr, inc(idx));
                const lastNodeWePrinted = arrayLast(nodesWeHavePrintedOnThisLine);
                let lineTxtHasBeenRightTrimmed = false;
                if (lastNodeWePrinted && isWhitespaceNode(lastNodeWePrinted)) {
                  lineTxt = rtrim(lineTxt);
                  lineTxtHasBeenRightTrimmed = true;
                }
                let parenTrailCloserIdx = 0;
                const numParenTrailClosers = arraySize(parenTrailClosers);
                while (parenTrailCloserIdx < numParenTrailClosers) {
                  const parenTrailCloserNode = parenTrailClosers[parenTrailCloserIdx];
                  if (isParenCloser(parenTrailCloserNode)) {
                    lineTxt = strConcat(lineTxt, parenTrailCloserNode.text);
                    parenTrailCloserNode.text = "";
                    parenTrailCloserNode._wasSlurpedUp = true;
                    parenNestingDepth = dec(parenNestingDepth);
                    stackPop(parenStack);
                  }
                  parenTrailCloserIdx = inc(parenTrailCloserIdx);
                }
                if (lineTxtHasBeenRightTrimmed) {
                  lineTxt = strConcat(lineTxt, lastNodeWePrinted.text);
                }
              }
            }
            if (currentNodeIsNewline) {
              nodesArr = recordOriginalColIndexes(nodesArr, idx);
              const numSpacesOnNextLine = numSpacesAfterNewline(node);
              const allNextLineNodesWereSlurpedUp = areForwardNodesAlreadySlurped(nodesArr, inc(idx));
              const nextLineContainsOnlyOneComment = isNextLineACommentLine(nodesArr, inc(idx));
              let nextLineCommentColIdx = -1;
              if (nextLineContainsOnlyOneComment) {
                nextLineCommentColIdx = numSpacesOnNextLine;
              }
              const isDoubleNewline = strIncludes(node.text, "\n\n");
              let newlineStr = "\n";
              if (isDoubleNewline) newlineStr = "\n\n";
              if (outputTxtContainsChars) {
                const topOfTheParenStack2 = stackPeek(parenStack, 0);
                if (topOfTheParenStack2 && !topOfTheParenStack2._rule3SearchComplete) {
                  let searchForAlignmentNode = true;
                  let openingLineNodeIdx = 1;
                  let pastFirstWhitespaceNode = false;
                  const numOpeningLineNodes = arraySize(topOfTheParenStack2._openingLineNodes);
                  if (numOpeningLineNodes > 2) {
                    while (searchForAlignmentNode) {
                      const openingLineNode = topOfTheParenStack2._openingLineNodes[openingLineNodeIdx];
                      if (openingLineNode) {
                        if (pastFirstWhitespaceNode && isNodeWithNonBlankText(openingLineNode) && openingLineNode._origColIdx === numSpacesOnNextLine) {
                          topOfTheParenStack2._rule3Active = true;
                          topOfTheParenStack2._rule3NumSpaces = openingLineNode._printedColIdx;
                          if (openingLineNode._nodeIsTagLiteral) {
                            topOfTheParenStack2._rule3NumSpaces = dec(openingLineNode._printedColIdx);
                          }
                          searchForAlignmentNode = false;
                        } else if (!pastFirstWhitespaceNode && isWhitespaceNode(openingLineNode)) {
                          pastFirstWhitespaceNode = true;
                        }
                      }
                      openingLineNodeIdx = inc(openingLineNodeIdx);
                      if (openingLineNodeIdx >= numOpeningLineNodes) {
                        searchForAlignmentNode = false;
                      }
                    }
                  }
                  topOfTheParenStack2._rule3SearchComplete = true;
                }
                let colIdxOfSingleLineCommentAlignmentNode = -1;
                let commentLooksAlignedWithPreviousForm = false;
                if (nextLineContainsOnlyOneComment) {
                  let idx2 = 0;
                  const numPrevLineNodes = arraySize(nodesWeHavePrintedOnThisLine);
                  while (idx2 < numPrevLineNodes) {
                    const prevLineNode = nodesWeHavePrintedOnThisLine[idx2];
                    let prevNode2 = null;
                    if (idx2 > 0) {
                      prevNode2 = nodesWeHavePrintedOnThisLine[dec(idx2)];
                    }
                    let isPossibleAlignmentNode = false;
                    if (isNodeWithNonBlankText(prevLineNode)) {
                      if (!prevNode2 || prevNode2 && !isParenOpener(prevNode2)) {
                        isPossibleAlignmentNode = true;
                      }
                    }
                    if (isPossibleAlignmentNode && nextLineCommentColIdx === prevLineNode._origColIdx) {
                      colIdxOfSingleLineCommentAlignmentNode = prevLineNode._printedColIdx;
                      commentLooksAlignedWithPreviousForm = true;
                      idx2 = inc(numPrevLineNodes);
                    }
                    idx2 = inc(idx2);
                  }
                }
                let numSpaces = 0;
                if (topOfTheParenStack2 && topOfTheParenStack2._rule3Active) {
                  numSpaces = topOfTheParenStack2._rule3NumSpaces;
                } else if (nextLineContainsOnlyOneComment && commentLooksAlignedWithPreviousForm) {
                  numSpaces = colIdxOfSingleLineCommentAlignmentNode;
                } else if (nextLineContainsOnlyOneComment && !topOfTheParenStack2) {
                  numSpaces = numSpacesOnNextLine;
                } else {
                  numSpaces = numSpacesForIndentation(topOfTheParenStack2);
                }
                let indentationStr = repeatString(" ", numSpaces);
                if (allNextLineNodesWereSlurpedUp) {
                  newlineStr = "";
                  indentationStr = "";
                }
                if (isCommaNode(node)) {
                  const nextLineCommaTrail = removeLeadingWhitespace(node.text);
                  const trimmedCommaTrail = rtrim(nextLineCommaTrail);
                  indentationStr = strConcat(indentationStr, trimmedCommaTrail);
                }
                if (strTrim(lineTxt) !== "") {
                  outTxt = strConcat(outTxt, lineTxt);
                }
                outTxt = strConcat(outTxt, newlineStr);
                lineTxt = indentationStr;
                nodesWeHavePrintedOnThisLine = [];
                colIdx = strLen(indentationStr);
                lineIdx = inc(lineIdx);
                if (isDoubleNewline) {
                  lineIdx = inc(lineIdx);
                }
              }
              skipPrintingThisNode = true;
            }
            if ((nodeContainsText(node) || currentNodeIsTag) && !skipPrintingThisNode) {
              const isTokenFollowedByOpener = isTokenNode(node) && nextTextNode && isParenOpener(nextTextNode);
              const isParenCloserFollowedByText = isParenCloser(node) && nextTextNode && (isTokenNode(nextTextNode) || isParenOpener(nextTextNode));
              const addSpaceAfterThisNode = isTokenFollowedByOpener || isParenCloserFollowedByText;
              let nodeTxt = node.text;
              if (currentNodeIsTag) {
                nodeTxt = "#";
              } else if (isCommentNode(node)) {
                if (commentNeedsSpaceInside(nodeTxt)) {
                  nodeTxt = strReplaceFirst(nodeTxt, /^(;+)([^ ])/, "$1 $2");
                }
                if (commentNeedsSpaceBefore(lineTxt, nodeTxt)) {
                  nodeTxt = strConcat(" ", nodeTxt);
                }
              }
              if (currentNodeIsWhitespace && (isLastNode || !outputTxtContainsChars)) {
                skipPrintingThisNode = true;
              } else if (isCommentNode(node) && parsedNs.commentOutsideNsForm === node.text && lineIdx === lineIdxOfClosingNsForm) {
                skipPrintingThisNode = true;
              } else if (currentNodeIsWhitespace && lineIdx === lineIdxOfClosingNsForm) {
                skipPrintingThisNode = true;
              } else if (node._skipPrintingThisNode === true) {
                skipPrintingThisNode = true;
              }
              if (!skipPrintingThisNode) {
                const lineLengthBeforePrintingNode = strLen(lineTxt);
                lineTxt = strConcat(lineTxt, nodeTxt);
                if (lineTxt !== "") {
                  outputTxtContainsChars = true;
                }
                node._printedColIdx = lineLengthBeforePrintingNode;
                node._printedLineIdx = lineIdx;
                stackPush(nodesWeHavePrintedOnThisLine, node);
              }
              if (addSpaceAfterThisNode) {
                lineTxt = strConcat(lineTxt, " ");
              }
              colIdx = colIdx + strLen(nodeTxt);
            }
          }
          idx = inc(idx);
        }
        if (lineTxt !== "") {
          outTxt = strConcat(outTxt, lineTxt);
        }
        if (nsStartStringIdx > 0) {
          const headStr = substr(outTxt, 0, dec(nsStartStringIdx));
          let nsStr = null;
          try {
            nsStr = formatNs(parsedNs);
          } catch (e) {
            return {
              status: "error",
              reason: e.message
            };
          }
          let tailStr = "";
          if (nsEndStringIdx > 0) {
            tailStr = substr(outTxt, inc(nsEndStringIdx), -1);
          }
          outTxt = strConcat3(headStr, nsStr, tailStr);
        }
        outTxt = strTrim(outTxt);
        return {
          status: "success",
          out: outTxt
        };
      }
      function format(inputTxt) {
        inputTxt = crlfToLf(inputTxt);
        const tree = parse(inputTxt);
        const nodesArr = flattenTree(tree);
        const ignoreFile = lookForIgnoreFile(nodesArr);
        if (ignoreFile) {
          return {
            fileWasIgnored: true,
            status: "success",
            out: inputTxt
          };
        } else {
          let parsedNs = null;
          try {
            parsedNs = parseNs(nodesArr);
          } catch (e) {
            return {
              status: "error",
              reason: e.message
            };
          }
          return formatNodes(nodesArr, parsedNs);
        }
      }
      function parse(inputTxt) {
        return getParser("source").parse(inputTxt, 0);
      }
      const API = {
        format,
        parse
      };
      const exportInternalFnsForTesting = false;
      if (exportInternalFnsForTesting) {
        API._charAt = charAt;
        API._substr = substr;
        API._repeatString = repeatString;
        API._strIncludes = strIncludes;
        API._toUpperCase = toUpperCase;
        API._strJoin = strJoin;
        API._rtrim = rtrim;
        API._strTrim = strTrim;
        API._strStartsWith = strStartsWith;
        API._strEndsWith = strEndsWith;
        API._isStringWithChars = isStringWithChars;
        API._strReplaceFirst = strReplaceFirst;
        API._crlfToLf = crlfToLf;
        API._strSplit = strSplit;
        API._stackPeek = stackPeek;
        API._stackPop = stackPop;
        API._stackPush = stackPush;
        API._commentNeedsSpaceBefore = commentNeedsSpaceBefore;
        API._commentNeedsSpaceInside = commentNeedsSpaceInside;
        API._removeLeadingWhitespace = removeLeadingWhitespace;
        API._txtHasCommasAfterNewline = txtHasCommasAfterNewline;
        API._AnyChar = AnyChar;
        API._Char = Char;
        API._Choice = Choice;
        API._NotChar = NotChar;
        API._Regex = Regex;
        API._Repeat = Repeat;
        API._Seq = Seq;
        API._String = String;
        API._flattenTree = flattenTree;
        API._parseJavaPackageWithClass = parseJavaPackageWithClass;
        API._parseNs = parseNs;
      }
      return API;
    });
  }
});

// src/main/js/std-clj-style.js
var import_standard_clojure_style = __toESM(require_standard_clojure_style());
import_standard_clojure_style.default.format(code);
