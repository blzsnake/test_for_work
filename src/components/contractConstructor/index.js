import React, { PureComponent } from 'react';
import pt from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import setConstructorParams from '../../actions/setConstructorParams';
import setConstructorToBase from '../../actions/setConstructorToBase';
import getConstructorFromBase from '../../actions/getConstructorFromBase';

import ContractFeature from './ContractFeature';
import ContractTotal from './ContractTotal';
import Text from '../text';
import Button from '../button';

import CONTRACT_FEATURES from './constants';
import s from './styles.less';

const getPrice = (type = '', prices = {}, year) => {
  if (type.indexOf('inet') !== -1) {
    return year ? prices.inet_year : prices.inet_month;
  }
  return prices[type];
};

const getTotal = (counter, features, prices) => {
  const featuresKey = Object.keys(features);
  const activeFeatures = featuresKey.filter(item => features[item]);
  const totalMonth = activeFeatures.reduce((memo, item) => {
    if (counter[item] && prices[item]) {
      return memo + (Number(counter[item]) * Number(prices[item]));
    } else if (item === 'inet') {
      return memo + (Number(counter[item]) * Number(prices.inet_month));
    }
    return memo;
  }, 0);
  const totalYear = (totalMonth - (Number(prices.inet_month) - Number(prices.inet_year))) * 12;

  return ({
    totalMonth,
    totalYear,
  });
};


class ContractConstructor extends PureComponent {
  static propTypes = {
    langs: pt.array.isRequired,
    prices: pt.object.isRequired,
    constructor: pt.object.isRequired,
    setConstructor: pt.func.isRequired,
    setConstructorToBase: pt.func.isRequired,
    getConstructorFromBase: pt.func.isRequired,
  }

  constructor(props) {
    super(props);
    props.getConstructorFromBase(props.token);
  }

  handleToggle = type => () => this.props.setConstructorParams({
    type: 'feature',
    data: {
      ...this.props.constructor.features,
      [type]: !this.props.constructor.features[type],
    },
  });

  handleIncrement = type => () => this.props.setConstructorParams({
    type: 'counter',
    data: {
      ...this.props.constructor.counter,
      [type]: this.props.constructor.counter[type] < 99 ?
        this.props.constructor.counter[type] + 1 : 1,
    },
  });

  handleDecrement = type => () => this.props.setConstructorParams({
    type: 'counter',
    data: {
      ...this.props.constructor.counter,
      [type]: this.props.constructor.counter[type] > 1 ?
        this.props.constructor.counter[type] - 1 : 1,
    },
  });

  handleSubscriptionChange = () => this.props.setConstructorParams({
    type: 'annual',
    data: !this.props.constructor.annual,
  });

  handleSaveData = (data, token) => () => this.props.setConstructorToBase({ data, token });

  renderFeaturesList = (list = []) =>
    (
      <ul className={s.featureList}>
        {list.map((item, index) =>
          (
            <li className={s.featureItem}>
              <ContractFeature
                id={`contractsFeature${index}${item.icon}`}
                name={`feature-${item.icom}`}
                checked={this.props.constructor.features[item.icon]}
                onChange={this.handleToggle(item.icon)}
                onIncrement={this.handleIncrement(item.icon)}
                onDecrement={this.handleDecrement(item.icon)}
                onSubscriptionChange={this.handleSubscriptionChange}
                counter={this.props.constructor.counter[item.icon]}
                annual={this.props.constructor.annual}
                price={getPrice(item.icon, this.props.prices, this.props.constructor.annual)}
                {...item} />
            </li>
          ))}
      </ul>
    );

  renderFooter = (total = {}) => (
    <div className={s.footer}>
      <div className={s.totals}>
        <div className={s.totalsText}>
          <Text size={20}>
            <FormattedMessage id='contracts_all_pay' />
          </Text>
        </div>
        <div className={s.numbers}>
          <ContractTotal
            name='contracts_once_year'
            number={total.totalYear}
            active={this.props.constructor.annual} />
          <ContractTotal
            name='contracts_once_month'
            number={total.totalMonth}
            active={!this.props.constructor.annual} />
        </div>
      </div>
      <div className={s.save}>
        <Button
          onClick={this.handleSaveData(this.props.constructor, this.props.token)}
          wide>
          <Text
            size={14}
            uppercase>
            <FormattedMessage id='contracts_save' />
          </Text>
        </Button>
      </div>
    </div>
  );

  renderTotal

  render() {
    return (
      <div>
        {this.renderFeaturesList(CONTRACT_FEATURES)}
        {this.renderFooter(
          getTotal(this.props.constructor.counter,
          this.props.constructor.features, this.props.prices)
          )}
      </div>);
  }
}

export default connect(
  state => ({
    authorize: state.user.authorize,
    localization: state.languages.translate,
    prices: state.tariffs.prices,
    constructor: state.constructor,
    token: state.user.token,
  }),
  { setConstructorParams, setConstructorToBase, getConstructorFromBase },
)(ContractConstructor);
