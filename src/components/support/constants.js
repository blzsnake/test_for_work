import React from 'react';
import Button from '../button';
import Text from '../text';

const DownloadButton = (text = 'скачать') => (
  <Button
    wide
    mod='device-cancel'
    color='yellow'>
    <Text
      size={11}
      uppercase
      fontInherit>
      {text}
    </Text>
  </Button>);

export const PAYMENTS = {
  titles: ['#', 'Дата', 'ID', 'Title', 'Сумма', ' '],
  rows: [
    ['1', '05-12-2017', '619375285', 'Click to edit', '27E', DownloadButton()],
    ['1', '05-12-2017', '619375285', 'Click to edit', '27E', DownloadButton()],
    ['1', '05-12-2017', '619375285', 'Click to edit', '27E', DownloadButton()],
    ['1', '05-12-2017', '619375285', 'Click to edit', '27E', DownloadButton()],
  ],
};

export const PAYMENTS_BUY = {
  titles: ['#', 'Дата', 'ID', 'Title', 'Сумма', ' '],
  rows: [
    ['1', '05-12-2017', '619375285', 'Click to edit', '27E', DownloadButton('оплатить')],
    ['1', '05-12-2017', '619375285', 'Click to edit', '27E', DownloadButton('оплатить')],
    ['1', '05-12-2017', '619375285', 'Click to edit', '27E', DownloadButton('оплатить')],
    ['1', '05-12-2017', '619375285', 'Click to edit', '27E', DownloadButton('оплатить')],
  ],
};

export const DIALOGS = [
  {
    title: '18.04.2018, суббота, 11:00:00 - проблемы с роутером',
    dialog: [
      {
        caller: 'support_you',
        text: 'Французский «ПСЖ» support_youразил заинтересованность в приглашении пока еще главного тренера английского «Арсенала» Арсена Венгера на работу. Напомним, что специалист покинет «канониров» по окончании сезона.',
      },
      {
        caller: 'GhoFi',
        text: 'Парижане намерены предложить Венгеру должность генерального менеджера. Предполагается, что француз будет работать в тандеме с потенциально ноsupport_youм главным тренером Томасом Тухелем.',
      },
      {
        caller: 'support_you',
        text: 'Венгер работает в «Арсенале» с 1996 года.',
      },
      {
        caller: 'GhoFi',
        text: 'Французский «ПСЖ» support_youразил заинтересованность в приглашении пока еще главного тренера английского «Арсенала» Арсена Венгера на работу. Напомним, что специалист покинет «канониров» по окончании сезона.',
      },
    ],
  },
  {
    title: '18.04.2018, суббота, 11:00:00 - проблемы с роутером',
    dialog: [
      {
        caller: 'support_you',
        text: 'Французский «ПСЖ» выразил заинтересованность в приглашении пока еще главного тренера английского «Арсенала» Арсена Венгера на работу. Напомним, что специалист покинет «канониров» по окончании сезона.',
      },
      {
        caller: 'support_you',
        text: 'Парижане намерены предложить Венгеру должность генерального менеджера. Предполагается, что француз будет работать в тандеме с потенциально новым главным тренером Томасом Тухелем.',
      },
    ],
  },
  {
    title: '18.04.2018, суббота, 11:00:00 - проблемы с роутером',
    dialog: [
      {
        caller: 'support_you',
        text: 'Французский «ПСЖ» выразил заинтересованность в приглашении пока еще главного тренера английского «Арсенала» Арсена Венгера на работу. Напомним, что специалист покинет «канониров» по окончании сезона.',
      },
    ],
  },
  {
    title: '18.04.2018, суббота, 11:00:00 - проблемы с роутером',
    dialog: [
      {
        caller: 'support_you',
        text: 'Французский «ПСЖ» выразил заинтересованность в приглашении пока еще главного тренера английского «Арсенала» Арсена Венгера на работу. Напомним, что специалист покинет «канониров» по окончании сезона.',
      },
      {
        caller: 'support_you',
        text: 'Французский «ПСЖ» выразил заинтересованность в приглашении пока еще главного тренера английского «Арсенала» Арсена Венгера на работу. Напомним, что специалист покинет «канониров» по окончании сезона.',
      },
      {
        caller: 'support_you',
        text: 'Французский «ПСЖ» выразил заинтересованность в приглашении пока еще главного тренера английского «Арсенала» Арсена Венгера на работу. Напомним, что специалист покинет «канониров» по окончании сезона.',
      },
      {
        caller: 'support_you',
        text: 'Французский «ПСЖ» выразил заинтересованность в приглашении пока еще главного тренера английского «Арсенала» Арсена Венгера на работу. Напомним, что специалист покинет «канониров» по окончании сезона.',
      },
      {
        caller: 'support_you',
        text: 'Французский «ПСЖ» выразил заинтересованность в приглашении пока еще главного тренера английского «Арсенала» Арсена Венгера на работу. Напомним, что специалист покинет «канониров» по окончании сезона.',
      },
      {
        caller: 'support_you',
        text: 'Французский «ПСЖ» выразил заинтересованность в приглашении пока еще главного тренера английского «Арсенала» Арсена Венгера на работу. Напомним, что специалист покинет «канониров» по окончании сезона.',
      },
    ],
  },
];
