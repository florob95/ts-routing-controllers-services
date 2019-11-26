"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../index");
/**
 * Registers an action to be executed when PATCH request comes on a given route.
 * Must be applied on a controller action.
 */
function Patch(route) {
    return function (object, methodName) {
        index_1.getMetadataArgsStorage().actions.push({
            type: "patch",
            target: object.constructor,
            method: methodName,
            route: route
        });
    };
}
exports.Patch = Patch;
//# sourceMappingURL=Patch.js.map