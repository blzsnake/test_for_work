import React, { PureComponent } from 'react';
import pt from 'prop-types';
import { connect } from 'react-redux';
import { addLocaleData, IntlProvider } from 'react-intl';
import en from 'react-intl/locale-data/en';
import es from 'react-intl/locale-data/es';
import ru from 'react-intl/locale-data/ru';
// components
import Header from 'components/header';
import Banner from 'components/banner';
import { Loader, Notification } from 'ghofi-react-components';
import Connections from 'components/connections';
import Finance from 'components/finance';
import Personal from 'components/personal';
import Tariffs from 'components/tariffs';
import Access from 'components/access';
import Footer from 'components/footer';
import LoginForm from 'components/loginForm';
import Arrow from 'components/arrow';

import debounce from 'utils/debounce';
import { fetchLangList, fetchTranslate } from '../../actions/language';
import changeLocale from '../../actions/changeLocale';
import getTariffs from '../../actions/getTariffs';
import { setUserAuthToken } from '../../actions/user';
import getConstructorFromBase from '../../actions/getConstructorFromBase';
import getWindowSize from '../../actions/getWindowSize';
import getPageScroll from '../../actions/getPageScroll';
import showNotification from '../../actions/showNotification';
import mapStateToProps from './mappers';

import s from './styles.less';

const LOCALE_MAP = {
  RUS: 'ru',
  ESP: 'es',
  ENG: 'en',
};

const LOCALE_MAP_BACK = {
  ru: 'RUS',
  es: 'ESP',
  en: 'ENG',
};

addLocaleData([...en, ...ru, ...es]);

const getLocale = (locale = 'en') => LOCALE_MAP[window.localStorage && window.localStorage.getItem('preferred_language')] || locale.split('-')[0];

const locale = process.env.SERVER ? 'en' : getLocale(navigator && ((navigator.languages && navigator.languages[0])
  || navigator.language
  || navigator.userLanguage));
const token = (!process.env.SERVER && window.localStorage && window.localStorage.getItem('token')) || '';

const dispatchViewportAction = action => () => window && action(window.innerWidth);
const dispatchPageScrollAction = action => () => debounce(2000, window && action(window.scrollY));
class GhofiProfilePage extends PureComponent {
  static propTypes = {
    localization: pt.object.isRequired,
    locale: pt.string.isRequired,
    token: pt.string.isRequired,
    config: pt.object.isRequired,
    authorize: pt.string.isRequired,
    fetchLangList: pt.func.isRequired,
    changeLocale: pt.func.isRequired,
    fetchTranslate: pt.func.isRequired,
    setUserAuthToken: pt.func.isRequired,
    getWindowSize: pt.func.isRequired,
    getPageScroll: pt.func.isRequired,
    showNotification: pt.func.isRequired,
  }
  constructor(props) {
    super(props);

    props.fetchLangList();
    props.getTariffs();
    if (token) props.setUserAuthToken(token);
    props.changeLocale(props.locale || LOCALE_MAP_BACK[locale]);
    props.fetchTranslate(locale);
  }

  componentDidMount() {
    if (!process.env.SERVER) {
      window.addEventListener('resize', dispatchViewportAction(this.props.getWindowSize));
      window.addEventListener('load', dispatchViewportAction(this.props.getWindowSize));
      window.addEventListener('scroll', dispatchPageScrollAction(this.props.getPageScroll));
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.locale !== nextProps.locale) {
      this.props.fetchTranslate(LOCALE_MAP[nextProps.locale]);
    }
    if (this.props.token !== nextProps.token) {
      this.props.getConstructorFromBase(nextProps.token);
    }
  }

  componentWillUnmount() {
    if (!process.env.SERVER) {
      window.removeEventListener('resize', dispatchViewportAction(this.props.getWindowSize));
      window.removeEventListener('load', dispatchViewportAction(this.props.getWindowSize));
      window.removeEventListener('scroll', dispatchPageScrollAction(this.props.getPageScroll));
    }
  }

  render() {
    const { notification = {}, loading } = this.props.config;

    return (
      <IntlProvider
        locale={LOCALE_MAP[this.props.locale] || locale}
        messages={this.props.localization}>
        <main className={s.main}>
          {loading && <Loader />}
          <Notification
            isOpen={notification.open}
            content={notification.content}
            position={notification.position}
            color={notification.color}
            onTimerEnd={() => this.props.showNotification({ open: false })} />
          <Header />
          {this.props.authorize ?
            <div>
              <Banner />
              {/* <Connections /> */}
              <Tariffs />
              <Finance />
              {/* <Contracts /> */}
              <Personal />
              {/* <Support /> */}
              {/* <Access /> */}
              <Arrow />
            </div> :
            <LoginForm />}
          <Footer />
        </main>
      </IntlProvider>
    );
  }
}

export default connect(mapStateToProps,
  { fetchLangList,
    fetchTranslate,
    changeLocale,
    getTariffs,
    setUserAuthToken,
    getConstructorFromBase,
    getWindowSize,
    getPageScroll,
    showNotification })(GhofiProfilePage);
