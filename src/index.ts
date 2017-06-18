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
@Plugin({
  pluginName: 'RichNotifications',
  plugin: 'cordova-plugin-rich-notifications',
  pluginRef: 'CordovaPluginRichNotifications',
  repo: 'https://vinnie777@bitbucket.org/vinnie777/cordova-plugin-rich-notifications.git', // the github repository URL for the plugin
  platforms: ['Android', 'iOS']
})
@Injectable()
export class RichNotifications extends IonicNativePlugin {

  /**
   * This function does something
   * @param arg1 {string} Some param to configure something
   * @return {Promise<any>} Returns a promise that resolves when something happens
   */
  @Cordova()
  sendNotification(arg1: string): Promise<any> {
    return; // We add return; here to avoid any IDE / Compiler errors
  }

}
