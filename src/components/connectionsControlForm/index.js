import React, { PureComponent } from 'react';
import pt from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { Text, Button, SmartField } from 'ghofi-react-components';
import setPinToMac from '../../actions/setPinToMac';
import editPinsTable from '../../actions/editPinsTable';
import equal from '../../utils/equal';
import Dropdown from '../dropdown';

import s from './styles.less';

const makeOptions = (options = []) =>
  options.reduce((memo, item) =>
    ([...memo, { value: item.type.toLowerCase(), label: item.label.toLowerCase() }]), []);

class connectionsControlForm extends PureComponent {
  static propTypes = {
    initialValues: pt.object,
    translate: pt.object,
  };

  static defaultProps = {
    initialValues: {},
    translate: {},
  };

  state = {
    values: {
      name: '',
      mac: '',
      type: {
        label: '',
        value: 0,
      },
    },
  }
  componentDidUpdate(prevProps) {
    const { initialValues } = this.props;

    if (!equal(this.props.initialValues, prevProps.initialValues)) {
      // eslint-disable-next-line react/no-did-update-set-state
      this.setState({
        values: {
          ...initialValues,
        },
      });
    }
  }
  handleChange = event => {
    if (typeof event === 'string') {
      this.setState({
        values: {
          ...this.state.values,
          mac: event,
        },
      });
      return;
    }

    this.setState({
      values: {
        ...this.state.values,
        [event.target.name]: String(event.target.value),
      },
    });
  }

  handleTypeChange = arg => this.setState({
    values: {
      ...this.state.values,
      type: arg.value,
      label: arg.label,
    },
  })

  handleEditSubmit = () => {
    this.props.editPinsTable({
    // поменять схему в свагере - чтобы принимал и строку и число
      ...this.state.values,
      pin: String(this.state.values.pin),
      type: this.state.values.type,
      client_id: this.props.initialValues.client_id,
    });
    this.props.onCloseClick();
  }

  handleSubmit = () => {
    const { mac, label, type, name, pin } = this.state.values;
    if (!this.state.values.mac) {
      this.mac.focus();
      this.mac.blur();
      this.mac.focus();
      return;
    }

    this.props.setPinToMac({
    // поменять схему в свагере - чтобы принимал и строку и число
      client_id: this.props.initialValues.client_id,
      pin,
      mac,
      data: {
        label,
        type,
        name,
      },
      content: this.props.translate.notify_save_pin,
    });

    this.props.onCloseClick();
  }

  render() {
    const {
      translate,
      initialValues,
      onCloseClick,
      deviceEditing,
    } = this.props;
    const { values } = this.state;
    const { pin = '' } = initialValues;
    const options = makeOptions(translate.form_pin_device_list);

    return (
      <form className={s.form}>
        <div className={s.wrapper}>
          <div className={s.pinTitle}>
            <Text
              size={20}
              sizeTablet={16}>
              <FormattedMessage
                id='form_pin_pin'
                values={{ pin }} />
            </Text>
          </div>
          <div className={s.fields}>
            <div className={s.row}>
              <div className={s.field}>
                <SmartField
                  getRef={elem => { this.name = elem; }}
                  wide
                  name='name'
                  label='Device name'
                  onChange={this.handleChange}
                  placeholder={translate.form_pin_device_name}
                  value={values.name} />
              </div>
            </div>
            <div className={s.row}>
              <div className={s.field}>
                <SmartField
                  wide
                  getRef={elem => { this.mac = elem; }}
                  name='mac'
                  placeholder='MAC'
                  label='MAC'
                  mask='__:__:__:__:__:__'
                  rules={[{
                    name: value => /((\d|[a-fA-F]){2}:){5}((\d|[a-fA-F]){2})/.test(value),
                    message: 'Check mac address',
                  }]}
                  onChange={this.handleChange}
                  value={values.mac}
                  disabled={deviceEditing}
                  required />
              </div>
            </div>
            <div className={s.row}>
              <div className={s.field}>
                <Dropdown
                  menuClassName='pin'
                  options={options}
                  className={s.select}
                  mod='pin'
                  onChange={this.handleTypeChange}
                  value={values.type}
                  placeholder='Select an option' />
              </div>
            </div>
            <div className={s.row}>
              <div className={s.button}>
                <Button
                  data-action='close'
                  wide
                  onClick={onCloseClick}>
                  <Text size={18}>
                    <FormattedMessage
                      id='form_pin_cancel' />
                  </Text>
                </Button>
              </div>
              <div className={s.button}>
                <Button
                  wide
                  onClick={deviceEditing ? this.handleEditSubmit : this.handleSubmit}>
                  <Text size={18}>
                    <FormattedMessage
                      id='form_pin_save' />
                  </Text>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </form>);
  }
}

export default connect(
  ({ languages }) => ({
    translate: languages.translate,
  }), { setPinToMac, editPinsTable },
)(connectionsControlForm);
