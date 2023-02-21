import AsyncStorage from '@react-native-async-storage/async-storage';
import { AsyncStorageKeys } from '../constants/async-storage-keys';

const save = async (key: string, data: any) => {
  try {
    await AsyncStorage.setItem(key, data)
  } catch (e) {
    console.log("ERROR While saving data ", " " + key + ": " + e)
  }
}

const get = async (key: string) => {
  try {
    const value = await AsyncStorage.getItem(key)
    if (value !== null) {
      return value;
    } else {
      return null;
    }
  } catch (e) {
    console.log("ERROR While reading data ", " " + key + ": " + e)
  }
}

const remove = async (key: string) => { 
  try {
    await AsyncStorage.removeItem(key)
  } catch (e) {
    console.log("ERROR While reading data ", " " + key + ": " + e)
  }
}

const clearAll = async () => { }

const getAllKeys = async() =>{
  let keys:any = []
  try {
    keys = await AsyncStorage.getAllKeys()
    return keys;
  } catch(e) {
    // read key error
  }
}


const isUserLoggedIn = async () =>{
  try {
    const value = JSON.parse(JSON.stringify(await AsyncStorage.getItem(AsyncStorageKeys.UserDetails)));
    if (value._h === 0  ) {
      return false;
    } else {
      return true;
    }
  } catch (e) {
  }
}

const SessionDetails = { save, get, remove, clearAll, getAllKeys, isUserLoggedIn }

export default SessionDetails;