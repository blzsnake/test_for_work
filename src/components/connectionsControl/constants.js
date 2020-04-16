import React from 'react';

export const DEVICE_LIST = [
  {
    type: 'mobile',
    name: 'Marta iPhone 46 :)',
    pin: '461728',
    disabled: false,
  },
  {
    type: 'pc',
    name: 'Marta iPhone 46 :)',
    pin: '461728',
    disabled: false,
  },
  {
    type: 'router',
    name: 'Marta iPhone 46 :)',
    pin: '461728',
    disabled: false,
  },
  {
    type: 'tab',
    name: 'Marta iPhone 46 :)',
    pin: '461728',
    disabled: false,
  },
  {
    type: 'tv',
    name: 'Marta iPhone 46 :)',
    pin: '461728',
    disabled: false,
  },
  {
    type: 'tab',
    name: 'Marta iPhone 46 :)',
    pin: '461728',
    disabled: false,
  },
  {
    type: 'pc',
    name: 'Marta iPhone 46 :)',
    pin: '461728',
    disabled: false,
  },
];

export const DEVICE_LIST_DISABLED = [
  {
    type: 'pc',
    name: 'Marta iPhone 46 :)',
    pin: '461728',
    disabled: true,
  },
  {
    type: 'tv',
    name: 'Marta iPhone 46 :)',
    pin: '461728',
    disabled: true,
  },
  {
    type: 'mobile',
    name: 'Marta iPhone 46 :)',
    pin: '461728',
    disabled: true,
  },
  {
    type: 'pc',
    name: 'Marta iPhone 46 :)',
    pin: '461728',
    disabled: true,
  },
  {
    type: 'tab',
    name: 'Marta iPhone 46 :)',
    pin: '461728',
    disabled: true,
  },
  {
    type: 'pc',
    name: 'Marta iPhone 46 :)',
    pin: '461728',
    disabled: true,
  },
];

export const HINT = {
  title: 'Подсказка',
  texts: [
    'Если нажать по очереди на кнопку PIN и на кнопку неактивного устройства из вашего списка (смартфон, ноутбук и т.д.), PIN будет привязан к вашему устройству.',
    'Если вы хотите привязать PIN к новому устройству, с которым ваша сеть еще “не знакома”, вам нужно в первый раз подключиться к сети GhoFi с этого нового устройства. После этого вы сможете управлять его подключением из личного кабинета.',
  ],
};

export const PINS = [
  'PIN 728619',
  'PIN 728619',
];

export const TABLE = {
  title: 'Статические публичные и внутренние IP',
  text: 'Имя, у вас 9 PIN, из них свободно 2 PIN',
  table: {
    titles: ['#', 'IP', 'MAC', 'Security'],
    rows: [
      ['1', '185.10.81.15', 'E4-98-D6-55-20-F7', <span>1</span>],
      ['2', '185.10.81.15', 'E4-98-D6-55-20-F7', <span>1</span>],
      ['3', '185.10.81.15', 'E4-98-D6-55-20-F7', <span>1</span>],
      ['4', '185.10.81.15', 'E4-98-D6-55-20-F7', <span>1</span>],
    ],
  },
};
