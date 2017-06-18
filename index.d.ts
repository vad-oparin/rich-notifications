import { IonicNativePlugin } from '@ionic-native/core';
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
export declare class RichNotifications extends IonicNativePlugin {
    /**
     * This function does something
     * @param arg1 {string} Some param to configure something
     * @return {Promise<any>} Returns a promise that resolves when something happens
     */
    testNotification(arg1: Date, arg2: string): Promise<any>;
    sendNotification(arg1: string): Promise<any>;
}
