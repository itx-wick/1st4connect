import messaging from '@react-native-firebase/messaging';
import firebase from '@react-native-firebase/app';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Commons} from '../utils';

export const checkNotificationPermission = async () => {
  const enabled = firebase.messaging().hasPermission();
  if (enabled) {
    console.log('Its getting FCM here');
    getToken();
  } else {
    console.log('Its getting FCM permission here');
    requestNotificationPermission();
  }
};

const getToken = async () => {
  let fcmToken = await AsyncStorage.getItem('fcmToken');
  if (!fcmToken) {
    fcmToken = await firebase.messaging().getToken();
    if (fcmToken) {
      //User has a device token
      await AsyncStorage.setItem('fcmToken', fcmToken);
    }
  }
  console.log('FCM Token', fcmToken);
};

const requestNotificationPermission = async () => {
  try {
    //User has authorized
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (enabled) {
      console.log('Authorization status:', authStatus);
      getToken();
    }
  } catch (error) {
    //User has rejected permissions
    Commons.showError(error.message);
    console.log('Permission Rejected');
  }
};
