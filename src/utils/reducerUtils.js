import { filter } from 'ramda';

export const normalizeStr = (str = '') => decodeURIComponent(str).replace(/\+/g, ' ');
export const findFreePins = (pins = []) => filter(item => !item.mac, pins);
export const findBusyPins = (pins = []) => filter(item => item.mac, pins);
export const getIpTable = (pub = [], internal = []) => [].concat([...pub, ...internal]);
export const makePinsList = (list = []) =>
  list.reduce((memo, item) => ([...memo, { pin: item.pin, mac: item.mac, ...item.data }]), []);
