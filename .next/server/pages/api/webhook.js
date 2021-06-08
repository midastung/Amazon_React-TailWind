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
exports.id = "pages/api/webhook";
exports.ids = ["pages/api/webhook"];
exports.modules = {

/***/ "./src/pages/api/webhook.js":
/*!**********************************!*\
  !*** ./src/pages/api/webhook.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"config\": function() { return /* binding */ config; }\n/* harmony export */ });\n/* harmony import */ var micro__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! micro */ \"micro\");\n/* harmony import */ var micro__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(micro__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var firebase_admin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase-admin */ \"firebase-admin\");\n/* harmony import */ var firebase_admin__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase_admin__WEBPACK_IMPORTED_MODULE_1__);\n\n //Secure a connection to FIREBASE from the backend\n\nconst serviceAccount = __webpack_require__(/*! ../../../permissions.json */ \"./permissions.json\");\n\nconst app = !firebase_admin__WEBPACK_IMPORTED_MODULE_1__.apps.length ? firebase_admin__WEBPACK_IMPORTED_MODULE_1__.initializeApp({\n  credential: firebase_admin__WEBPACK_IMPORTED_MODULE_1__.credential.cert(serviceAccount)\n}) : firebase_admin__WEBPACK_IMPORTED_MODULE_1__.app(); //Establish connection to Stripe\n\nconst stripe = __webpack_require__(/*! stripe */ \"stripe\")(process.env.STRIPE_SECRET_KEY);\n\nconst endpointSecret = process.env.STRIPE_SIGNING_SECRET;\n\nconst fulfillOrder = async session => {\n  // console.log(\"Fulfilling order\", session);\n  return app.firestore().collection('users').doc(session.metadata.email).collection(\"orders\").doc(session.id).set({\n    amount: session.amount_total / 100,\n    amount_shipping: session.total_details.amount_shipping / 100,\n    images: JSON.parse(session.metadata.images),\n    timestamp: firebase_admin__WEBPACK_IMPORTED_MODULE_1__.firestore.FieldValue.serverTimestamp()\n  }).then(() => {\n    console.log(`SUCCESS: Order ${session.id} had been added to the DB`);\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (async (req, res) => {\n  if (req.method === 'POST') {\n    const requestBuffer = await (0,micro__WEBPACK_IMPORTED_MODULE_0__.buffer)(req);\n    const payload = requestBuffer.toString();\n    const sig = req.headers[\"stripe-signature\"];\n    let event; //Verify that the EVENT posted came from stripe\n\n    try {\n      event = stripe.webhooks.constructEvent(payload, sig, endpointSecret);\n    } catch (err) {\n      console.lgo('ERROR', err.message);\n      return res.status(400).send(`Webhook error: ${err.message}`);\n    } //Handle the checkout.session.completed event\n\n\n    if (event.type === \"checkout.session.completed\") {\n      const session = event.data.object; //Fullfill the order... \n\n      return fulfillOrder(session).then(() => res.status(200)).catch(err => res.status(400).send(`Webhook Error: ${err.message}`));\n    }\n  }\n});\nconst config = {\n  api: {\n    bodyParser: false,\n    externalResolver: true\n  }\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93aXRoLXJlZHV4LXRvb2xraXQvLi9zcmMvcGFnZXMvYXBpL3dlYmhvb2suanM/NGY2ZiJdLCJuYW1lcyI6WyJzZXJ2aWNlQWNjb3VudCIsInJlcXVpcmUiLCJhcHAiLCJhZG1pbiIsImNyZWRlbnRpYWwiLCJzdHJpcGUiLCJwcm9jZXNzIiwiZW52IiwiU1RSSVBFX1NFQ1JFVF9LRVkiLCJlbmRwb2ludFNlY3JldCIsIlNUUklQRV9TSUdOSU5HX1NFQ1JFVCIsImZ1bGZpbGxPcmRlciIsInNlc3Npb24iLCJmaXJlc3RvcmUiLCJjb2xsZWN0aW9uIiwiZG9jIiwibWV0YWRhdGEiLCJlbWFpbCIsImlkIiwic2V0IiwiYW1vdW50IiwiYW1vdW50X3RvdGFsIiwiYW1vdW50X3NoaXBwaW5nIiwidG90YWxfZGV0YWlscyIsImltYWdlcyIsIkpTT04iLCJwYXJzZSIsInRpbWVzdGFtcCIsInRoZW4iLCJjb25zb2xlIiwibG9nIiwicmVxIiwicmVzIiwibWV0aG9kIiwicmVxdWVzdEJ1ZmZlciIsImJ1ZmZlciIsInBheWxvYWQiLCJ0b1N0cmluZyIsInNpZyIsImhlYWRlcnMiLCJldmVudCIsIndlYmhvb2tzIiwiY29uc3RydWN0RXZlbnQiLCJlcnIiLCJsZ28iLCJtZXNzYWdlIiwic3RhdHVzIiwic2VuZCIsInR5cGUiLCJkYXRhIiwib2JqZWN0IiwiY2F0Y2giLCJjb25maWciLCJhcGkiLCJib2R5UGFyc2VyIiwiZXh0ZXJuYWxSZXNvbHZlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtDQUdBOztBQUNBLE1BQU1BLGNBQWMsR0FBR0MsbUJBQU8sQ0FBQyxxREFBRCxDQUE5Qjs7QUFDQSxNQUFNQyxHQUFHLEdBQUcsQ0FBQ0MsdURBQUQsR0FDTkEseURBQUEsQ0FBb0I7QUFBRUMsWUFBVSxFQUFFRCwyREFBQSxDQUFzQkgsY0FBdEI7QUFBZCxDQUFwQixDQURNLEdBRU5HLCtDQUFBLEVBRk4sQyxDQUlBOztBQUNBLE1BQU1FLE1BQU0sR0FBR0osbUJBQU8sQ0FBQyxzQkFBRCxDQUFQLENBQWtCSyxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsaUJBQTlCLENBQWY7O0FBQ0EsTUFBTUMsY0FBYyxHQUFHSCxPQUFPLENBQUNDLEdBQVIsQ0FBWUcscUJBQW5DOztBQUVBLE1BQU1DLFlBQVksR0FBRyxNQUFPQyxPQUFQLElBQW1CO0FBQ3BDO0FBRUEsU0FBT1YsR0FBRyxDQUNMVyxTQURFLEdBRUZDLFVBRkUsQ0FFUyxPQUZULEVBR0ZDLEdBSEUsQ0FHRUgsT0FBTyxDQUFDSSxRQUFSLENBQWlCQyxLQUhuQixFQUlGSCxVQUpFLENBSVMsUUFKVCxFQUtGQyxHQUxFLENBS0VILE9BQU8sQ0FBQ00sRUFMVixFQU1GQyxHQU5FLENBTUU7QUFDREMsVUFBTSxFQUFFUixPQUFPLENBQUNTLFlBQVIsR0FBdUIsR0FEOUI7QUFFREMsbUJBQWUsRUFBRVYsT0FBTyxDQUFDVyxhQUFSLENBQXNCRCxlQUF0QixHQUF3QyxHQUZ4RDtBQUdERSxVQUFNLEVBQUVDLElBQUksQ0FBQ0MsS0FBTCxDQUFXZCxPQUFPLENBQUNJLFFBQVIsQ0FBaUJRLE1BQTVCLENBSFA7QUFJREcsYUFBUyxFQUFFeEIsZ0ZBQUE7QUFKVixHQU5GLEVBWUZ5QixJQVpFLENBWUcsTUFBTTtBQUNSQyxXQUFPLENBQUNDLEdBQVIsQ0FBYSxrQkFBaUJsQixPQUFPLENBQUNNLEVBQUcsMkJBQXpDO0FBQ0gsR0FkRSxDQUFQO0FBZUgsQ0FsQkQ7O0FBb0JBLCtEQUFlLE9BQU9hLEdBQVAsRUFBWUMsR0FBWixLQUFvQjtBQUMvQixNQUFJRCxHQUFHLENBQUNFLE1BQUosS0FBZSxNQUFuQixFQUEyQjtBQUN2QixVQUFNQyxhQUFhLEdBQUcsTUFBTUMsNkNBQU0sQ0FBQ0osR0FBRCxDQUFsQztBQUNBLFVBQU1LLE9BQU8sR0FBR0YsYUFBYSxDQUFDRyxRQUFkLEVBQWhCO0FBQ0EsVUFBTUMsR0FBRyxHQUFHUCxHQUFHLENBQUNRLE9BQUosQ0FBWSxrQkFBWixDQUFaO0FBRUEsUUFBSUMsS0FBSixDQUx1QixDQU92Qjs7QUFDQSxRQUFJO0FBQ0FBLFdBQUssR0FBR25DLE1BQU0sQ0FBQ29DLFFBQVAsQ0FBZ0JDLGNBQWhCLENBQStCTixPQUEvQixFQUF3Q0UsR0FBeEMsRUFBNkM3QixjQUE3QyxDQUFSO0FBQ0gsS0FGRCxDQUVFLE9BQU9rQyxHQUFQLEVBQVk7QUFDVmQsYUFBTyxDQUFDZSxHQUFSLENBQVksT0FBWixFQUFxQkQsR0FBRyxDQUFDRSxPQUF6QjtBQUNBLGFBQU9iLEdBQUcsQ0FBQ2MsTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXNCLGtCQUFpQkosR0FBRyxDQUFDRSxPQUFRLEVBQW5ELENBQVA7QUFDSCxLQWJzQixDQWV2Qjs7O0FBQ0EsUUFBSUwsS0FBSyxDQUFDUSxJQUFOLEtBQWUsNEJBQW5CLEVBQWlEO0FBQzdDLFlBQU1wQyxPQUFPLEdBQUc0QixLQUFLLENBQUNTLElBQU4sQ0FBV0MsTUFBM0IsQ0FENkMsQ0FHN0M7O0FBQ0EsYUFBT3ZDLFlBQVksQ0FBQ0MsT0FBRCxDQUFaLENBQ0ZnQixJQURFLENBQ0csTUFBTUksR0FBRyxDQUFDYyxNQUFKLENBQVcsR0FBWCxDQURULEVBRUZLLEtBRkUsQ0FFS1IsR0FBRCxJQUFTWCxHQUFHLENBQUNjLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFzQixrQkFBaUJKLEdBQUcsQ0FBQ0UsT0FBUSxFQUFuRCxDQUZiLENBQVA7QUFHSDtBQUVKO0FBQ0osQ0EzQkQ7QUE2Qk8sTUFBTU8sTUFBTSxHQUFHO0FBQ2xCQyxLQUFHLEVBQUU7QUFDREMsY0FBVSxFQUFFLEtBRFg7QUFFREMsb0JBQWdCLEVBQUU7QUFGakI7QUFEYSxDQUFmIiwiZmlsZSI6Ii4vc3JjL3BhZ2VzL2FwaS93ZWJob29rLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYnVmZmVyIH0gZnJvbSAnbWljcm8nO1xuaW1wb3J0ICogYXMgYWRtaW4gZnJvbSAnZmlyZWJhc2UtYWRtaW4nO1xuXG4vL1NlY3VyZSBhIGNvbm5lY3Rpb24gdG8gRklSRUJBU0UgZnJvbSB0aGUgYmFja2VuZFxuY29uc3Qgc2VydmljZUFjY291bnQgPSByZXF1aXJlKCcuLi8uLi8uLi9wZXJtaXNzaW9ucy5qc29uJyk7XG5jb25zdCBhcHAgPSAhYWRtaW4uYXBwcy5sZW5ndGhcbiAgICA/IGFkbWluLmluaXRpYWxpemVBcHAoeyBjcmVkZW50aWFsOiBhZG1pbi5jcmVkZW50aWFsLmNlcnQoc2VydmljZUFjY291bnQpIH0pIFxuICAgIDogYWRtaW4uYXBwKCk7XG5cbi8vRXN0YWJsaXNoIGNvbm5lY3Rpb24gdG8gU3RyaXBlXG5jb25zdCBzdHJpcGUgPSByZXF1aXJlKFwic3RyaXBlXCIpKHByb2Nlc3MuZW52LlNUUklQRV9TRUNSRVRfS0VZKTtcbmNvbnN0IGVuZHBvaW50U2VjcmV0ID0gcHJvY2Vzcy5lbnYuU1RSSVBFX1NJR05JTkdfU0VDUkVUO1xuXG5jb25zdCBmdWxmaWxsT3JkZXIgPSBhc3luYyAoc2Vzc2lvbikgPT4ge1xuICAgIC8vIGNvbnNvbGUubG9nKFwiRnVsZmlsbGluZyBvcmRlclwiLCBzZXNzaW9uKTtcblxuICAgIHJldHVybiBhcHBcbiAgICAgICAgLmZpcmVzdG9yZSgpXG4gICAgICAgIC5jb2xsZWN0aW9uKCd1c2VycycpXG4gICAgICAgIC5kb2Moc2Vzc2lvbi5tZXRhZGF0YS5lbWFpbClcbiAgICAgICAgLmNvbGxlY3Rpb24oXCJvcmRlcnNcIilcbiAgICAgICAgLmRvYyhzZXNzaW9uLmlkKVxuICAgICAgICAuc2V0KHtcbiAgICAgICAgICAgIGFtb3VudDogc2Vzc2lvbi5hbW91bnRfdG90YWwgLyAxMDAsXG4gICAgICAgICAgICBhbW91bnRfc2hpcHBpbmc6IHNlc3Npb24udG90YWxfZGV0YWlscy5hbW91bnRfc2hpcHBpbmcgLyAxMDAsXG4gICAgICAgICAgICBpbWFnZXM6IEpTT04ucGFyc2Uoc2Vzc2lvbi5tZXRhZGF0YS5pbWFnZXMpLFxuICAgICAgICAgICAgdGltZXN0YW1wOiBhZG1pbi5maXJlc3RvcmUuRmllbGRWYWx1ZS5zZXJ2ZXJUaW1lc3RhbXAoKSxcbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coYFNVQ0NFU1M6IE9yZGVyICR7c2Vzc2lvbi5pZH0gaGFkIGJlZW4gYWRkZWQgdG8gdGhlIERCYCk7XG4gICAgICAgIH0pO1xufVxuXG5leHBvcnQgZGVmYXVsdCBhc3luYyAocmVxLCByZXMpID0+IHtcbiAgICBpZiAocmVxLm1ldGhvZCA9PT0gJ1BPU1QnKSB7XG4gICAgICAgIGNvbnN0IHJlcXVlc3RCdWZmZXIgPSBhd2FpdCBidWZmZXIocmVxKTtcbiAgICAgICAgY29uc3QgcGF5bG9hZCA9IHJlcXVlc3RCdWZmZXIudG9TdHJpbmcoKTtcbiAgICAgICAgY29uc3Qgc2lnID0gcmVxLmhlYWRlcnNbXCJzdHJpcGUtc2lnbmF0dXJlXCJdXG5cbiAgICAgICAgbGV0IGV2ZW50O1xuXG4gICAgICAgIC8vVmVyaWZ5IHRoYXQgdGhlIEVWRU5UIHBvc3RlZCBjYW1lIGZyb20gc3RyaXBlXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBldmVudCA9IHN0cmlwZS53ZWJob29rcy5jb25zdHJ1Y3RFdmVudChwYXlsb2FkLCBzaWcsIGVuZHBvaW50U2VjcmV0KTtcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxnbygnRVJST1InLCBlcnIubWVzc2FnZSlcbiAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuc2VuZChgV2ViaG9vayBlcnJvcjogJHtlcnIubWVzc2FnZX1gKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vSGFuZGxlIHRoZSBjaGVja291dC5zZXNzaW9uLmNvbXBsZXRlZCBldmVudFxuICAgICAgICBpZiAoZXZlbnQudHlwZSA9PT0gXCJjaGVja291dC5zZXNzaW9uLmNvbXBsZXRlZFwiKSB7XG4gICAgICAgICAgICBjb25zdCBzZXNzaW9uID0gZXZlbnQuZGF0YS5vYmplY3Q7XG5cbiAgICAgICAgICAgIC8vRnVsbGZpbGwgdGhlIG9yZGVyLi4uIFxuICAgICAgICAgICAgcmV0dXJuIGZ1bGZpbGxPcmRlcihzZXNzaW9uKVxuICAgICAgICAgICAgICAgIC50aGVuKCgpID0+IHJlcy5zdGF0dXMoMjAwKSlcbiAgICAgICAgICAgICAgICAuY2F0Y2goKGVycikgPT4gcmVzLnN0YXR1cyg0MDApLnNlbmQoYFdlYmhvb2sgRXJyb3I6ICR7ZXJyLm1lc3NhZ2V9YCkpXG4gICAgICAgIH1cblxuICAgIH1cbn07XG5cbmV4cG9ydCBjb25zdCBjb25maWcgPSB7XG4gICAgYXBpOiB7XG4gICAgICAgIGJvZHlQYXJzZXI6IGZhbHNlLFxuICAgICAgICBleHRlcm5hbFJlc29sdmVyOiB0cnVlLFxuICAgIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/api/webhook.js\n");

/***/ }),

/***/ "./permissions.json":
/*!**************************!*\
  !*** ./permissions.json ***!
  \**************************/
/***/ (function(module) {

"use strict";
module.exports = JSON.parse('{"type":"service_account","project_id":"amzn-web-yt","private_key_id":"40f0d68fb004fc5a1cbb6743eeba3370ce87e65c","private_key":"-----BEGIN PRIVATE KEY-----\\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCyFm1cb5YSRLLV\\nGdxZh1vMpGD71klWNK+aLtph1uyeirc6I3MPKcEtKeSAVDPxI7oUFQGVY3GC/Cw5\\nzK+PkkHIC5PtX86nK9A2c/MRdSj71Mp7gph44p1oNwShYqJgSDyE53PwIupf4mFh\\nB+kuKUAbwTYeDT6qZMCqfJ2d9ikSZo+n5dIwZiuy1Bev1AKRv/XRsTf7K1sDmZGZ\\nhTY0Ls8G7gsrksmpEwvuSkJV0NQYYWYQ8ECQgOUwMld854QXZC9USP7zVgp7qxJg\\njPdB2SGqcrSo1sMtfTqppLt0FtVV/2Nul8bnFu/vfZ88AQ27an/u9BC7lfOrmYoV\\nigXOHggHAgMBAAECggEABmjTXxVOwY1HId0t+zSgYVS1NgRKN7NYTgkCg2PPlAyc\\nnHM0K+uuFJ+dyrtz8o39Vlf6oVNdohI6PK90hPi8dRH9mtPs6fntR30BsiEC7HVh\\nbM8imyF7sa4V0CZKNhXDe0Wh19/+Zgp7VnTSShErboIB1QtXj5z4aHyyQma6FSBl\\nU69XK3bzacGQGdNe08lW6E/1yTlepwEA6KoV6Swi7DZ83xkJh5SSFGC+GeLx8OAk\\nR+keTrPwulNJO0Xd0cRy6ooTs1f85EB60Le9HkudhI4gUiWmWd3hkyeWUoVJr9PQ\\nRhqEPMMhHw/S963G4IDqUow4iXyXJqIj3CknMhzVUQKBgQDa2YS676K501cNXzZj\\nvjtZQ9nGfqrSM7OglGWCeM6Ny4Z4FKVuYncYtaXN4eXjY4F+8dlz3VMmlbdmETEF\\nD7BGl5EoLbX+d3pmeWWL+GSbiOr9o6NhFDJNfQcM8T21DqATYA1tQmPMAC7dqyPO\\n8IWhm/+gvnWDVMLpSO81ClMxHwKBgQDQUYYpwYCZ8DCSEFvu5D6/wbws1496nZtf\\nb1EhikBpwTaOAKAq4VoTdht24Xw5PfWPwvpm8hnx1WGr+d2qt0QDo6nAAwL1Jtl/\\nArU6eVzqNii+8dKoF+8e/MQY7KoP3LjvYLUrITHTzPhsEHM5nVEgXu13coPtERDv\\nSHC2VM5EGQKBgD+UslsdA8m4/LGF1+difRuR+tMQOdCX9LfSZStirZ/EYWzBks5f\\nDPrAy0rlNkS5xAV9fg+LXXz4QjAFDpjJ1gysPB/QJ++mBol++2GO6KvHO3407GJn\\n27VnfYTlEWhot1jprvzvLM83vmXoMp8MgcZR7BJnQvzEw1vDNLvUJBdBAoGADRoz\\nkAjFp+j9hRJWVe4xLCppRYDBW3ryPMxpk+x4JK6sWb4cVNYbrkGtdIq2H3uQKFyh\\nFzx++UDshb6PfJ9OPdRbZuJJm1W4NE7dSzI679g8M9ZN45itx4sqYk7wW1MMprG0\\nc2QBGEs6DMH0HVmRsrGFyg9/0LdUE1jBDhbDanECgYEAts2NxhlzdfG3moxTd+1t\\njyi1Ojm7HjZlacbXfNc8LrW0+Q9glEcAgNBu73mtqBrd6J8M3T4didXqAcUs7Wmx\\n7FaWt4MTYNSUMiCRW9vq9k8/ZJ4v8F2r++5MqI06p6LpBJsEf3oE9gQJLOcIHv8B\\nhs+lidXow0So+Hha2yjFkSM=\\n-----END PRIVATE KEY-----\\n","client_email":"firebase-adminsdk-xz05h@amzn-web-yt.iam.gserviceaccount.com","client_id":"104074958381353833277","auth_uri":"https://accounts.google.com/o/oauth2/auth","token_uri":"https://oauth2.googleapis.com/token","auth_provider_x509_cert_url":"https://www.googleapis.com/oauth2/v1/certs","client_x509_cert_url":"https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-xz05h%40amzn-web-yt.iam.gserviceaccount.com"}');

/***/ }),

/***/ "firebase-admin":
/*!*********************************!*\
  !*** external "firebase-admin" ***!
  \*********************************/
/***/ (function(module) {

"use strict";
module.exports = require("firebase-admin");;

/***/ }),

/***/ "micro":
/*!************************!*\
  !*** external "micro" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("micro");;

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
var __webpack_exports__ = (__webpack_exec__("./src/pages/api/webhook.js"));
module.exports = __webpack_exports__;

})();