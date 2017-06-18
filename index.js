var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * This is a template for new plugin wrappers
 *
 * TODO:
 * - Add/Change information below
 * - Document usage (importing, executing main functionality)
 * - Remove any imports that you are not using
 * - Add this file to /src/index.ts (follow style of other plugins)
 * - Remove all the comments included in this template, EXCEPT the @Plugin wrapper docs and any other docs you added
 * - Remove this note
 *
 */
import { Injectable } from '@angular/core';
import { Plugin, Cordova, IonicNativePlugin } from '@ionic-native/core';
/**
 * @name Rich Notifications
 * @description
 * This plugin does something
 *
 * @usage
 * ```typescript
 * import { RichNotifications } from '@ionic-native/rich-notifications';
 *
 *
 * constructor(private richNotifications: RichNotifications) { }
 *
 * ...
 *
 *
 * this.richNotifications.functionName('Hello', 123)
 *   .then((res: any) => console.log(res))
 *   .catch((error: any) => console.error(error));
 *
 * ```
 */
var RichNotifications = (function (_super) {
    __extends(RichNotifications, _super);
    function RichNotifications() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * This function does something
     * @param arg1 {string} Some param to configure something
     * @return {Promise<any>} Returns a promise that resolves when something happens
     */
    RichNotifications.prototype.testNotification = function (arg1, arg2) {
        return; // We add return; here to avoid any IDE / Compiler errors
    };
    RichNotifications.prototype.sendNotification = function (arg1) {
        return; // We add return; here to avoid any IDE / Compiler errors
    };
    return RichNotifications;
}(IonicNativePlugin));
RichNotifications.decorators = [
    { type: Injectable },
];
/** @nocollapse */
RichNotifications.ctorParameters = function () { return []; };
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Date, String]),
    __metadata("design:returntype", Promise)
], RichNotifications.prototype, "testNotification", null);
__decorate([
    Cordova(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], RichNotifications.prototype, "sendNotification", null);
RichNotifications = __decorate([
    Plugin({
        pluginName: 'RichNotifications',
        plugin: 'cordova-plugin-rich-notifications',
        pluginRef: 'CordovaPluginRichNotifications',
        repo: 'https://vinnie777@bitbucket.org/vinnie777/cordova-plugin-rich-notifications.git',
        platforms: ['Android', 'iOS']
    })
], RichNotifications);
export { RichNotifications };
//# sourceMappingURL=index.js.map