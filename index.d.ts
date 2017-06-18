import { IonicNativePlugin } from '@ionic-native/core';
export declare class RichNotifications extends IonicNativePlugin {
    registerNotification(date: Date): Promise<any>;
    sendNotification(date: Date): Promise<any>;
}
