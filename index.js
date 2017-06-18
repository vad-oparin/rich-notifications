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
import { Injectable } from '@angular/core';
import { Cordova, 
//    CordovaInstance,
//    CordovaProperty,
//    InstanceProperty,
IonicNativePlugin, Plugin } from '@ionic-native/core';
var RichNotifications = (function (_super) {
    __extends(RichNotifications, _super);
    function RichNotifications() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RichNotifications.prototype.registerNotification = function (date) {
        return;
    };
    RichNotifications.prototype.sendNotification = function (date) {
        return;
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
    __metadata("design:paramtypes", [Date]),
    __metadata("design:returntype", Promise)
], RichNotifications.prototype, "registerNotification", null);
RichNotifications = __decorate([
    Plugin({
        pluginName: 'RichNotifications',
        plugin: 'cordova-plugin-rich-notifications',
        pluginRef: 'CordovaPluginRichNotifications',
        repo: 'https://github.com/vad-oparin/cordova-plugin-rich-notifications',
        platforms: ['Android', 'iOS'],
        install: '',
    })
], RichNotifications);
export { RichNotifications };
//# sourceMappingURL=index.js.map