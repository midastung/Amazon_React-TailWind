/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function() {
var exports = {};
exports.id = "pages/api/create-checkout-session";
exports.ids = ["pages/api/create-checkout-session"];
exports.modules = {

/***/ "./src/pages/api/create-checkout-session.js":
/*!**************************************************!*\
  !*** ./src/pages/api/create-checkout-session.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst stripe = __webpack_require__(/*! stripe */ \"stripe\")(process.env.STRIPE_SECRET_KEY);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (async (req, res) => {\n  const {\n    items,\n    email\n  } = req.body;\n  const transformedItems = items.map(item => ({\n    description: item.description,\n    quantity: 1,\n    price_data: {\n      currency: \"gbp\",\n      product_data: {\n        name: item.title,\n        images: [item.image]\n      },\n      unit_amount: item.price * 100\n    }\n  }));\n  const session = await stripe.checkout.sessions.create({\n    payment_method_types: [\"card\"],\n    shipping_rates: [\"shr_1Izy9SDjXmXI0yHbYzSkLfpo\"],\n    line_items: transformedItems,\n    shipping_address_collection: {\n      allowed_countries: [\"US\", \"CA\", \"GB\"]\n    },\n    mode: \"payment\",\n    success_url: `${process.env.HOST}/success`,\n    cancel_url: `${process.env.HOST}/checkout`,\n    metadata: {\n      email,\n      images: JSON.stringify(items.map(item => item.image))\n    }\n  });\n  res.status(200).json({\n    id: session.id\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93aXRoLXJlZHV4LXRvb2xraXQvLi9zcmMvcGFnZXMvYXBpL2NyZWF0ZS1jaGVja291dC1zZXNzaW9uLmpzPzg3M2IiXSwibmFtZXMiOlsic3RyaXBlIiwicmVxdWlyZSIsInByb2Nlc3MiLCJlbnYiLCJTVFJJUEVfU0VDUkVUX0tFWSIsInJlcSIsInJlcyIsIml0ZW1zIiwiZW1haWwiLCJib2R5IiwidHJhbnNmb3JtZWRJdGVtcyIsIm1hcCIsIml0ZW0iLCJkZXNjcmlwdGlvbiIsInF1YW50aXR5IiwicHJpY2VfZGF0YSIsImN1cnJlbmN5IiwicHJvZHVjdF9kYXRhIiwibmFtZSIsInRpdGxlIiwiaW1hZ2VzIiwiaW1hZ2UiLCJ1bml0X2Ftb3VudCIsInByaWNlIiwic2Vzc2lvbiIsImNoZWNrb3V0Iiwic2Vzc2lvbnMiLCJjcmVhdGUiLCJwYXltZW50X21ldGhvZF90eXBlcyIsInNoaXBwaW5nX3JhdGVzIiwibGluZV9pdGVtcyIsInNoaXBwaW5nX2FkZHJlc3NfY29sbGVjdGlvbiIsImFsbG93ZWRfY291bnRyaWVzIiwibW9kZSIsInN1Y2Nlc3NfdXJsIiwiSE9TVCIsImNhbmNlbF91cmwiLCJtZXRhZGF0YSIsIkpTT04iLCJzdHJpbmdpZnkiLCJzdGF0dXMiLCJqc29uIiwiaWQiXSwibWFwcGluZ3MiOiI7QUFBQSxNQUFNQSxNQUFNLEdBQUdDLG1CQUFPLENBQUMsc0JBQUQsQ0FBUCxDQUFrQkMsT0FBTyxDQUFDQyxHQUFSLENBQVlDLGlCQUE5QixDQUFmOztBQUVBLCtEQUFlLE9BQU9DLEdBQVAsRUFBWUMsR0FBWixLQUFvQjtBQUNqQyxRQUFNO0FBQUVDLFNBQUY7QUFBU0M7QUFBVCxNQUFtQkgsR0FBRyxDQUFDSSxJQUE3QjtBQUVBLFFBQU1DLGdCQUFnQixHQUFHSCxLQUFLLENBQUNJLEdBQU4sQ0FBV0MsSUFBRCxLQUFXO0FBQzVDQyxlQUFXLEVBQUVELElBQUksQ0FBQ0MsV0FEMEI7QUFFNUNDLFlBQVEsRUFBRSxDQUZrQztBQUc1Q0MsY0FBVSxFQUFFO0FBQ1ZDLGNBQVEsRUFBRSxLQURBO0FBRVZDLGtCQUFZLEVBQUU7QUFDWkMsWUFBSSxFQUFFTixJQUFJLENBQUNPLEtBREM7QUFFWkMsY0FBTSxFQUFFLENBQUNSLElBQUksQ0FBQ1MsS0FBTjtBQUZJLE9BRko7QUFNVkMsaUJBQVcsRUFBRVYsSUFBSSxDQUFDVyxLQUFMLEdBQWE7QUFOaEI7QUFIZ0MsR0FBWCxDQUFWLENBQXpCO0FBYUEsUUFBTUMsT0FBTyxHQUFHLE1BQU14QixNQUFNLENBQUN5QixRQUFQLENBQWdCQyxRQUFoQixDQUF5QkMsTUFBekIsQ0FBZ0M7QUFDcERDLHdCQUFvQixFQUFFLENBQUMsTUFBRCxDQUQ4QjtBQUVwREMsa0JBQWMsRUFBRSxDQUFDLDhCQUFELENBRm9DO0FBR3BEQyxjQUFVLEVBQUVwQixnQkFId0M7QUFJcERxQiwrQkFBMkIsRUFBRTtBQUMzQkMsdUJBQWlCLEVBQUUsQ0FBQyxJQUFELEVBQU8sSUFBUCxFQUFhLElBQWI7QUFEUSxLQUp1QjtBQU9wREMsUUFBSSxFQUFFLFNBUDhDO0FBUXBEQyxlQUFXLEVBQUcsR0FBRWhDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZZ0MsSUFBSyxVQVJtQjtBQVNwREMsY0FBVSxFQUFHLEdBQUVsQyxPQUFPLENBQUNDLEdBQVIsQ0FBWWdDLElBQUssV0FUb0I7QUFVcERFLFlBQVEsRUFBRTtBQUNSN0IsV0FEUTtBQUVSWSxZQUFNLEVBQUVrQixJQUFJLENBQUNDLFNBQUwsQ0FBZWhDLEtBQUssQ0FBQ0ksR0FBTixDQUFXQyxJQUFELElBQVVBLElBQUksQ0FBQ1MsS0FBekIsQ0FBZjtBQUZBO0FBVjBDLEdBQWhDLENBQXRCO0FBZ0JBZixLQUFHLENBQUNrQyxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFBRUMsTUFBRSxFQUFFbEIsT0FBTyxDQUFDa0I7QUFBZCxHQUFyQjtBQUNELENBakNEIiwiZmlsZSI6Ii4vc3JjL3BhZ2VzL2FwaS9jcmVhdGUtY2hlY2tvdXQtc2Vzc2lvbi5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHN0cmlwZSA9IHJlcXVpcmUoXCJzdHJpcGVcIikocHJvY2Vzcy5lbnYuU1RSSVBFX1NFQ1JFVF9LRVkpO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyAocmVxLCByZXMpID0+IHtcbiAgY29uc3QgeyBpdGVtcywgZW1haWwgfSA9IHJlcS5ib2R5O1xuXG4gIGNvbnN0IHRyYW5zZm9ybWVkSXRlbXMgPSBpdGVtcy5tYXAoKGl0ZW0pID0+ICh7XG4gICAgZGVzY3JpcHRpb246IGl0ZW0uZGVzY3JpcHRpb24sXG4gICAgcXVhbnRpdHk6IDEsXG4gICAgcHJpY2VfZGF0YToge1xuICAgICAgY3VycmVuY3k6IFwiZ2JwXCIsXG4gICAgICBwcm9kdWN0X2RhdGE6IHtcbiAgICAgICAgbmFtZTogaXRlbS50aXRsZSxcbiAgICAgICAgaW1hZ2VzOiBbaXRlbS5pbWFnZV0sXG4gICAgICB9LFxuICAgICAgdW5pdF9hbW91bnQ6IGl0ZW0ucHJpY2UgKiAxMDAsXG4gICAgfSxcbiAgfSkpO1xuXG4gIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBzdHJpcGUuY2hlY2tvdXQuc2Vzc2lvbnMuY3JlYXRlKHtcbiAgICBwYXltZW50X21ldGhvZF90eXBlczogW1wiY2FyZFwiXSxcbiAgICBzaGlwcGluZ19yYXRlczogW1wic2hyXzFJenk5U0RqWG1YSTB5SGJZelNrTGZwb1wiXSxcbiAgICBsaW5lX2l0ZW1zOiB0cmFuc2Zvcm1lZEl0ZW1zLFxuICAgIHNoaXBwaW5nX2FkZHJlc3NfY29sbGVjdGlvbjoge1xuICAgICAgYWxsb3dlZF9jb3VudHJpZXM6IFtcIlVTXCIsIFwiQ0FcIiwgXCJHQlwiXSxcbiAgICB9LFxuICAgIG1vZGU6IFwicGF5bWVudFwiLFxuICAgIHN1Y2Nlc3NfdXJsOiBgJHtwcm9jZXNzLmVudi5IT1NUfS9zdWNjZXNzYCxcbiAgICBjYW5jZWxfdXJsOiBgJHtwcm9jZXNzLmVudi5IT1NUfS9jaGVja291dGAsXG4gICAgbWV0YWRhdGE6IHtcbiAgICAgIGVtYWlsLFxuICAgICAgaW1hZ2VzOiBKU09OLnN0cmluZ2lmeShpdGVtcy5tYXAoKGl0ZW0pID0+IGl0ZW0uaW1hZ2UpKSxcbiAgICB9LFxuICB9KTtcblxuICByZXMuc3RhdHVzKDIwMCkuanNvbih7IGlkOiBzZXNzaW9uLmlkIH0pO1xufTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/api/create-checkout-session.js\n");

/***/ }),

/***/ "stripe":
/*!*************************!*\
  !*** external "stripe" ***!
  \*************************/
/***/ (function(module) {

"use strict";
module.exports = require("stripe");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./src/pages/api/create-checkout-session.js"));
module.exports = __webpack_exports__;

})();