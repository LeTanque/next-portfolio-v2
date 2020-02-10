webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/Navbar.jsx":
/*!*******************************!*\
  !*** ./components/Navbar.jsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AppNavbar; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "../node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function AppNavbar(_ref) {
  var user = _ref.user;
  var navbarStyle = {
    marginBottom: "25px",
    position: "relative"
  };
  return __jsx("section", {
    className: "section__nav",
    style: navbarStyle
  }, __jsx("nav", null, __jsx("div", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/"
  }, __jsx("a", null, "Thoughts!"))), __jsx("div", {
    "aria-controls": "basic-navbar-nav"
  }), __jsx("div", {
    id: "basic-navbar-nav"
  }, __jsx("div", {
    className: "mr-auto"
  }, user && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/share-thought"
  }, __jsx("a", {
    className: "nav-link"
  }, "New Thought")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/profile"
  }, __jsx("a", {
    className: "nav-link"
  }, "Profile")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/logout"
  }, __jsx("a", {
    className: "nav-link"
  }, "Log Out"))), !user && __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/login"
  }, __jsx("a", {
    className: "nav-link"
  }, "Log In"))))));
}

/***/ })

})
//# sourceMappingURL=_app.js.eda3b02e525f5d1f3d4b.hot-update.js.map