import { MMKV } from 'react-native-mmkv';

import type { STORAGES_KEY } from '@src/constants';
import { logger } from '@src/utils';

export type dataStoreType = 'string' | 'boolean' | 'number' | 'object';

export const storageMmkv = new MMKV();

export const getData = (key: STORAGES_KEY, _type?: dataStoreType) => {
  try {
    const data = storageMmkv.getString(key);
    if (data) {
      const parseData = JSON.parse(data);
      return parseData;
    }
  } catch (error) {
    logger('storage getData', error);
  }
};

export const setData = (key: STORAGES_KEY, value: any) => {
  try {
    if (typeof value === 'boolean') {
      storageMmkv.set(key, value);
    } else if (typeof value === 'number') {
      storageMmkv.set(key, value);
    } else {
      const jsonValue = JSON.stringify(value);
      storageMmkv.set(key, jsonValue);
    }
  } catch (error) {
    logger('storage setData', error);
  }
};

export const getStorageKey = () => {
  const keys = storageMmkv.getAllKeys();
  return keys;
};

export const deleteStorage = (key: STORAGES_KEY) => {
  return storageMmkv.delete(key);
};

export const storage = {
  deleteStorage,
  getData,
  getStorageKey,
  setData,
};

export const reduxStorage = {
  getItem: (key: string) => {
    const value = storageMmkv.getString(key);
    return Promise.resolve(value);
  },
  removeItem: (key: string) => {
    storageMmkv.delete(key);
    return Promise.resolve();
  },
  setItem: (key: string, value: any) => {
    storageMmkv.set(key, value);
    return Promise.resolve(true);
  },
};

export type Storage = typeof storage;
