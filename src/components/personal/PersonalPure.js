import React from 'react';
import { FormattedMessage } from 'react-intl';

import { Text, Container, Button } from 'ghofi-react-components';
import Hint from './Hint';
import List from './List';

import addIco from './images/add.svg';
import addSave from './images/save.svg';

import HINT_DATA from './constants';

import s from './styles.less';

const renderMenu = props => (
  <div className={s.menu}>
    <div className={s.menu__item}>
      <Button
        onClick={props.toggleHint}
        value='?'
        menu />
    </div>
    <div className={s.menu__item}>
      <Button
        onClick={props.addRow}
        menu>
        <img alt='add' src={addIco} />
      </Button>
    </div>
    {/* <div className={s.menu__item}>
      // Временно убираю - так как ресет требует отдельной функции
      // получения списка контактов TODO - сделать это функцию в биллинге
      <Button
        menu
        onClick={props.onResetList}>
        <img alt='refresh' src={addRefresh} />
      </Button>
    </div> */}
    <div className={s.menu__item}>
      <Button
        menu
        onClick={() => props.onSave(props.list)}>
        <img alt='save' src={addSave} />
      </Button>
    </div>
  </div>
);

const PersonalPure = props => (
  <section id='personal' className={s.personal}>
    <Container>
      <div className={s.header}>
        <div className={s.title}>
          <Text
            size={46}
            sizeTablet={32}
            isThreeSixB >
            <FormattedMessage id='personal_title' />
          </Text>
        </div>
        {renderMenu(props)}
      </div>
      <List
        list={props.list}
        onChange={props.changeField}
        onChangeIcon={props.changeIcon} />
      {props.isShowHint && <Hint {...HINT_DATA} />}
    </Container>
  </section>
);

export default PersonalPure;
