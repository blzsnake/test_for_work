import React from 'react';

import { FormattedMessage } from 'react-intl';
import { Container, Button, Text } from 'ghofi-react-components';
import CustomButton from '../button';

import SWITCHERS from './constants';

import s from './styles.less';

import ghofi from './images/ghofi.svg';

// const makeSwitchersList = (switchers = [], { onMenuClick, activeMenu }) =>
// switchers.map((item, index) => (
//   <div className={s.switcher}>
//     <Button
//       onClick={onMenuClick(index)}
//       color={index === activeMenu ? 'yellow' : null}
//       wide
//       href={`#${item}`}>
//       <Text
//         size={14}
//         uppercase
//         fontInherit
//       >
//         <FormattedMessage id={`banner_menu_${index + 1}`} />
//       </Text>
//     </Button>
//   </div>
//   )
// );
const makeSwitchersList = ({ onMenuClick = () => {}, activeMenu }) => (
  <div>
    <div className={`${s.switcher} test-banner-switch`}>
      <Button
        onClick={onMenuClick(0)}
        color={activeMenu === 0 ? 'yellow' : null}
        wide
        href='#tariffs'>
        <Text
          size={14}
          uppercase
          fontInherit>
          <FormattedMessage id='tariffs' />
        </Text>
      </Button>
    </div>
    <div className={`${s.switcher} test-banner-switch`}>
      <Button
        onClick={onMenuClick(1)}
        color={activeMenu === 1 ? 'yellow' : null}
        wide
        href='#finance'>
        <Text
          size={14}
          uppercase
          fontInherit>
          <FormattedMessage id='banner_menu_2' />
        </Text>
      </Button>
    </div>
    <div className={`${s.switcher} test-banner-switch`}>
      <Button
        onClick={onMenuClick(3)}
        color={activeMenu === 3 ? 'yellow' : null}
        wide
        href='#personal'>
        <Text
          size={14}
          uppercase
          fontInherit>
          <FormattedMessage id='banner_menu_4' />
        </Text>
      </Button>
    </div>
    {/* <div className={`${s.switcher} test-banner-switch`}>
      <Button
        onClick={onMenuClick(5)}
        color={activeMenu === 5 ? 'yellow' : null}
        wide
        href='#access'>
        <Text
          size={14}
          uppercase
          fontInherit>
          <FormattedMessage id='banner_menu_6' />
        </Text>
      </Button>
    </div> */}
  </div>
);

const BannerPure = props => (
  <section id='banner' className={s.banner}>
    <Container>
      <div className={s.wrapper}>
        <div className={s.info}>
          <div className={s.title}>
            <Text
              size={46}
              sizeTablet={32}
              isThreeSixB >
              <FormattedMessage
                id='banner_title'
                values={{
                  name: props.name,
                }} />
            </Text>
          </div>
          {/* <div className={s.text}>
            <Text
              size={20}
              sizeTablet={16}>
              <FormattedMessage
                id='banner_text'
                values={{
                  date: props.validDate,
                  pinQuantity: props.pinQuantity,
                  pinFree: props.freePinQuantity,
                  pinGuests: '',
                  pinGuestTime: '',
                }} />
            </Text>
          </div> */}
        </div>
        <div className={`${s.ghofi} test-banner-image`}>
          <img
            src={ghofi}
            alt='ghofi'
            className={s.image} />
        </div>
        <div className={`${s.menu} test-banner-menu`}>
          {makeSwitchersList(SWITCHERS, props)}
        </div>
      </div>
      <div className={s.arrow}>
        <CustomButton mod='arrow-down' href='#tariffs' />
      </div>
    </Container>
  </section>
);

export default BannerPure;
